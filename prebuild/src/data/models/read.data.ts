import * as pd from 'pareto-core-data'

import * as g_liana from "lib-liana/dist/submodules/liana"
import {
    array,
    component,
    dictionary,
    globalType,
    group, option, optional, prop, r,
    taggedUnion,
    terminal
} from "lib-liana/dist/submodules/liana/shorthands"

const d = pd.d

export const $: g_liana.T.Model<pd.SourceLocation> = {
    'type library': {
        'imports': d({}),
        'terminal types': d({
            "identifier": null,
            "name": null,
            "text": null,
        }),
        'global types': d({
            "Document": globalType({}, group({
                "root": prop(component("Element", {}))
            })),
            "Element": globalType({}, group({
                "name": prop(terminal("name")),
                "attributes": prop(dictionary(terminal("text"))),
                "content": prop(array(taggedUnion({
                    "text": option(terminal("text")),
                    "element": option(component("Element", {})),
                })))
            })),
        }),

    },
    'root': {
        'annotation': pd.getLocationInfo(0),
        'key': "Document"
    }
}