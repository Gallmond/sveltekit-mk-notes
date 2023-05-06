export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","global.css"]),
	mimeTypes: {".png":"image/png",".css":"text/css"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.469ab763.js","imports":["_app/immutable/entry/start.469ab763.js","_app/immutable/chunks/index.787148e1.js","_app/immutable/chunks/singletons.1a2a35d9.js","_app/immutable/chunks/index.437c60a6.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.aed7c58d.js","imports":["_app/immutable/entry/app.aed7c58d.js","_app/immutable/chunks/index.787148e1.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
