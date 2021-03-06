import Vue from "vue"

function remove_data_recursively(
	el: HTMLElement,
	data_field: string,
	skip_node = false,
) {
	if (el.dataset && el.dataset[data_field] !== undefined) {
		if (!skip_node) {
			delete el.dataset[data_field]
		}
		if (el.hasChildNodes()) {
			const childNodes = el.childNodes as NodeListOf<HTMLElement>
			childNodes.forEach(childEl =>
				remove_data_recursively(childEl, data_field),
			)
		}
	}
}

const directive: Vue.DirectiveOptions = {
	bind(el, binding, vnode) {
		if (vnode.context) {
			const $options = vnode.context.$options as Vue.ComponentOptions<Vue> & {
				_scopeId?: string
			}
			const scope_id = $options._scopeId
			if (scope_id && scope_id.startsWith("data-")) {
				const data_field = scope_id.slice(5) // strip 'data-'
				remove_data_recursively(el, data_field, binding.modifiers.inner)
				// This seem to break further sibling elements, and it seems to work fine without it in my test cases.
				// $options._scopeId = undefined
			}
		}
	},
}

export default directive
