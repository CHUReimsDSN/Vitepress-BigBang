import { i as e, t } from "./__vite-browser-external-CyUo2XFV.js";
import { createBlock as n, createElementBlock as r, createVNode as i, defineComponent as a, openBlock as o, unref as s, withCtx as c } from "vue";
import l from "vitepress/theme";
import u from "vitepress/dist/client/theme-default/components/VPNavBarSearch.vue";
import { Dark as d, Quasar as f } from "quasar";
import { BigBangTheme as p } from "quasar-app-extension-big-bang";
import { groupIconMdPlugin as m, groupIconVitePlugin as h } from "vitepress-plugin-group-icons";
//#region src/components/AsideBefore.vue?vue&type=script&setup=true&lang.ts
var g = { class: "flex flex-center full-width q-pb-md q-pt-sm" }, _ = /* @__PURE__ */ a({
	__name: "AsideBefore",
	setup(e) {
		return (e, t) => (o(), r("div", g, [i(u)]));
	}
}), v = {
	__name: "Layout",
	setup(e) {
		let { Layout: t } = l;
		return (e, r) => (o(), n(s(t), null, {
			"sidebar-nav-before": c(() => [i(_)]),
			_: 1
		}));
	}
};
//#endregion
//#region src/vp-theme.ts
function y(e, t) {
	if (e.use(f, { plugins: { Dark: d } }), typeof window < "u") {
		let e = () => {
			d.set(document.documentElement.classList.contains("dark"));
		};
		e(), new MutationObserver(e).observe(document.documentElement, {
			attributes: !0,
			attributeFilter: ["class"]
		});
	}
	p.setPrimary(t.primary), p.setSurface(t.surface), p.setupDefaultProps();
}
//#endregion
//#region src/vp-config.ts
var b = /* @__PURE__ */ e(t(), 1), x = {
	themeConfig: {
		docFooter: {
			prev: !1,
			next: !1
		},
		search: {
			provider: "local",
			options: { translations: {
				button: { buttonText: "Recherche" },
				modal: {
					footer: {
						navigateText: "Naviguer",
						selectText: "Sélectionner",
						closeText: "Fermer"
					},
					noResultsText: "Aucun résultat pour "
				}
			} }
		},
		outline: { label: "Sur cette page" },
		returnToTopLabel: "Retour en haut",
		darkModeSwitchLabel: "Apparence"
	},
	markdown: {
		theme: {
			dark: "dark-plus",
			light: "light-plus"
		},
		config(e) {
			e.use(m);
		}
	},
	vite: {
		resolve: { alias: [{
			find: /^.*\/VPSidebarGroup\.vue$/,
			replacement: (0, b.fileURLToPath)(new b.URL("data:application/octet-stream;base64,PHNjcmlwdCBzZXR1cCBsYW5nPSJ0cyI+CmltcG9ydCB7IFFFeHBhbnNpb25JdGVtLCBRTGlzdCB9IGZyb20gInF1YXNhciI7CmltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAidnVlIjsKaW1wb3J0IFNpZGViYXJJdGVtIGZyb20gIi4vU2lkZWJhckl0ZW0udnVlIjsKaW1wb3J0IHR5cGUgeyBUU2lkZWJhckVudHJ5IH0gZnJvbSAiLi4vdHlwZXMiOwoKLy8gcHJvcHMKY29uc3QgcHJvcHNDb21wb25lbnQgPSBkZWZpbmVQcm9wczx7CiAgaXRlbXM6IFRTaWRlYmFyRW50cnlbXTsKfT4oKTsKCi8vIGZ1bmN0aW9ucwpmdW5jdGlvbiBpc09wZW5lZChpdGVtOiBUU2lkZWJhckVudHJ5KTogYm9vbGVhbiB7CiAgcmV0dXJuIChpdGVtLml0ZW1zID8/IFtdKS5maW5kKChpKSA9PiBpLmFjdGl2ZSB8fCBpc09wZW5lZChpKSkgIT09IHVuZGVmaW5lZDsKfQoKLy8gY29tcHV0ZWRzCmNvbnN0IG1lbnVzID0gY29tcHV0ZWQoKCkgPT4gewogIC8vIHd0ZiBWaXRlUHJlc3MKICBpZiAocHJvcHNDb21wb25lbnQuaXRlbXNbMF0udGV4dCA9PT0gdW5kZWZpbmVkKSB7CiAgICByZXR1cm4gWwogICAgICAuLi4ocHJvcHNDb21wb25lbnQuaXRlbXNbMF0uaXRlbXMgPz8gW10pLAogICAgICAuLi5wcm9wc0NvbXBvbmVudC5pdGVtcy5zbGljZSgxKSwKICAgIF07CiAgfQogIHJldHVybiBwcm9wc0NvbXBvbmVudC5pdGVtczsKfSk7Cjwvc2NyaXB0PgoKPHRlbXBsYXRlPgogIDxxLWxpc3Q+CiAgICA8ZGl2IHYtZm9yPSJpdGVtIG9mIG1lbnVzIiA6a2V5PSJpdGVtLnRleHQiPgogICAgICA8cS1leHBhbnNpb24taXRlbQogICAgICAgIHYtaWY9IihpdGVtLml0ZW1zPy5sZW5ndGggPz8gMCkgPiAwIgogICAgICAgIDpkZWZhdWx0LW9wZW5lZD0iaXNPcGVuZWQoaXRlbSkiCiAgICAgICAgOmljb249Iml0ZW0uaWNvbiA/PyAnJyIKICAgICAgICA6bGFiZWw9Iml0ZW0udGV4dCA/PyAnPz8/JyIKICAgICAgICBoZWFkZXJDbGFzcz0ibWVudS1pdGVtIgogICAgICAgIGNsYXNzPSJtZW51LWV4cGFuZGFibGUiCiAgICAgICAgZ3JvdXA9Imdyb3VwQWNjb3JkaW9uTW9kZSIKICAgICAgPgogICAgICAgIDxTaWRlYmFyR3JvdXAgOml0ZW1zPSJpdGVtLml0ZW1zISIgLz4KICAgICAgPC9xLWV4cGFuc2lvbi1pdGVtPgoKICAgICAgPFNpZGViYXJJdGVtIHYtZWxzZSA6aXRlbT0iaXRlbSIgLz4KICAgIDwvZGl2PgogIDwvcS1saXN0Pgo8L3RlbXBsYXRlPgo=", "" + import.meta.url))
		}] },
		plugins: [h()]
	}
};
//#endregion
export { v as Layout, y as setupVitepressBigBangTheme, x as vitepressBigBangConfig };
