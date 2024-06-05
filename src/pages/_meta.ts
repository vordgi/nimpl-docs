const config = {
  "index": {
    "type": "page",
    "title": "Next-impl solutions",
    "display": "hidden",
    "theme": {
      "layout": "raw"
    }
  },
  "ui/ux": {
    "title": "UI/UX",
    "type": "menu",
    "items": {
      "getters": {
        "title": "getters",
        "href": "/getters"
      },
      "i18n": {
        "title": "i18n",
        "href": "/i18n"
      },
      "context": {
        "title": "context",
        "href": "/context"
      }
    }
  },
  "configuration": {
    "title": "Configuration",
    "type": "menu",
    "items": {
      "classnames-minifier": {
        "title": "classnames-minifier",
        "href": "/classnames-minifier"
      },
      "config": {
        "title": "config",
        "href": "/config"
      },
      "middleware-chain": {
        "title": "middleware-chain",
        "href": "/middleware-chain"
      },
      "ab-tests": {
        "title": "ab-tests",
        "href": "/ab-tests"
      }
    }
  },
  "cache": {
    "title": "Cache",
    "type": "menu",
    "items": {
      "cache-adapter": {
        "title": "cache-adapter",
        "href": "/cache-adapter"
      },
      "cache-in-memory": {
        "title": "cache-in-memory",
        "href": "/cache-in-memory"
      }
    }
  },
  "tools": {
    "title": "Tools",
    "type": "menu",
    "items": {
      "inio": {
        "title": "inio",
        "href": "https://www.npmjs.com/package/@nimpl/inio",
        "newWindow": true
      },
      "versioner": {
        "title": "versioner",
        "href": "https://www.npmjs.com/package/@nimpl/versioner",
        "newWindow": true
      }
    }
  },
  "blog": {
    "title": "Blog",
    "type": "page"
  },
  "---": {
    "type": "separator"
  },
  "getters": "getters",
  "i18n": "i18n",
  "classnames-minifier": "classnames-minifier",
  "middleware-chain": "middleware-chain",
  "config": "config",
  "context": "context",
  "ab-tests": "ab-tests",
  "cache-adapter": "cache-adapter",
  "cache-in-memory": "cache-in-memory",
  "contribution": "Contribution",
  "404": {
    "type": "page",
    "display": "hidden",
    "theme": {
      "timestamp": false,
      "typesetting": "article"
    }
  }
}

export default config;
