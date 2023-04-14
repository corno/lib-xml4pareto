import * as pd from 'pareto-core-data'

import * as g_liana from "lib-liana/dist/main"

import { $ as d_xml } from "./models/read.data"

export const $: g_liana.T.CompileParameters<pd.SourceLocation> = {
    'outputs': pd.a([
        {
            'path': `../../pareto/src/data/submodules/read/glossary.generated.ts`,
            'data': {
                'settings': {
                    'annotations': true,
                    'datamodel': [true, {
                        'reference mapping': ['string', null],
                    }],
                    'visitor interface': [false],
                    'algorithms': {
                        'serialize': [false],
                    },
                },
                'mapped library': {
                    'library': d_xml['type library'],

                    'terminal mapping': pd.d({
                        "identifier": ['string', null],
                        "name": ['string', null],
                        "text": ['string', null],
                    }),
                },
            }
        }
    ])
}