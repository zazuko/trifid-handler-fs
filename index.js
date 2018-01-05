'use strict'

var rdf = require('rdf-ext')
var FileStore = require('rdf-store-fs')
var Ldp = require('ldp')

module.exports = function (options) {
  this.store = new FileStore(rdf, {path: options.path})

  this.store.graphFile = function (iri) {
    return iri.pathname + '.ttl'
  }

  this.ldp = new Ldp(options.rdf, {
    graphStore: this.store
  })

  // legacy interface
  this.get = function (req, res, next, iri) {
    req.iri = iri

    this.handle(req, res, next)
  }

  this.handle = function (req, res, next) {
    this.ldp.get(req, res, next, req.iri)
  }
}
