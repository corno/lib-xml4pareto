import * as pd from 'pareto-core-data'

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

import { $ as d_main } from "./main/module.data"
import { $ as d_bindings } from "./bindings/moduledefintion.data"
import { $ as d_read } from "./submodules/read/module.data"

export const $: mproject.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "XML",
    'license': "TBD",

    'dependencies': d({
        "glo-pareto-common": null,
        "lib-fountain-pen": null,
    }),
    'type': ['library', {
        'main': d_main,
        'submodules': d({
            "read": d_read,
        }),
        'bindings': [true, {
            'definition': d_bindings,
            'implementation': ['typescript', null],

        }],
        'executables': d({}),
        'test': {
            'dependencies': d({
            }),
            'definition': {
                'glossary': {
                    'root': {
                        'parameters': d({}),
                        'imports': d({}),
                        'root': {
                            'namespaces': d({}),
                            'types': d({}),
                        },
                        'asynchronous': {
                            'interfaces': d({}),
                            'algorithms': d({}),
                        },
                        'synchronous': {
                            'interfaces': d({}),
                            'algorithms': d({}),
                        },
                    },
                    'imports': d({}),
                },
                'api': {
                    'root': {
                        'algorithms': d({}),
                    },
                    'imports': d({}),
                },
            },
            'imports': d({}),
        },
    }],
}