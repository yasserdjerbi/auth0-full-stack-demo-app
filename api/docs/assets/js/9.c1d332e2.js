(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{355:function(t,s,a){"use strict";a.r(s);var e=a(43),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"configuring-to-run"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-to-run"}},[t._v("#")]),t._v(" Configuring to run")]),t._v(" "),a("h2",{attrs:{id:"the-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-code"}},[t._v("#")]),t._v(" The Code")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git clone https://github.com/CliffCrerar/auth0-full-stack-demo-app.git\n")])])]),a("h2",{attrs:{id:"structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#structure"}},[t._v("#")]),t._v(" Structure")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("/app")]),t._v(" - the "),a("code",[t._v("angular")]),t._v(" application")]),t._v(" "),a("li",[a("code",[t._v("/api")]),t._v(" - the express server")])]),t._v(" "),a("h2",{attrs:{id:"configuring-authentication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-authentication"}},[t._v("#")]),t._v(" Configuring authentication.")]),t._v(" "),a("p",[t._v("Both parts of the app use a common secrets file named "),a("code",[t._v("auth.conf.json")]),t._v(" that holds the secrets for authentication. Hence this file will not appear in the repository. It has the following structure and must reside in the root of the project where the application will look for it.")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"DOMAIN"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"FE_CLIENT_ID"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"API_CLIENT_ID"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"AUDIENCE"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"JWKSURI"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ISSUER"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ALGORITHM"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RS256"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"data-utilities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-utilities"}},[t._v("#")]),t._v(" Data utilities")]),t._v(" "),a("p",[t._v("The application uses a collection level document database as its data repository and it has been baked into the express server as middel-ware. The data client runs on port "),a("code",[t._v("5984")]),t._v(" on the same origin as the express server. It uses leveldb and saves the data from its "),a("code",[t._v("tables")]),t._v(" as files on the host drive inside the project.")])])}),[],!1,null,null,null);s.default=r.exports}}]);