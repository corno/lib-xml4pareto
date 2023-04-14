

export type ElementType =
    | ['eentity',
        {
            'data': string | string[]
        }]

export function sref($: string): Terminal {
    return ['reference', $]
}
export function attdef($2: Terminal, $3:
    | ['default', string]
    | ['implied', null]
    | ['required', null]
    | ['fixed', string]
    | ['ref', string]

): null {
    return null
}


export function IDREFS(): Terminal {
    return ['idrefs', null]
}

export function IDREF(): Terminal {
    return ['idref', null]
}

export function CDATA(): Terminal {
    return ['cdata', null]
}

export function NMTOKEN(): Terminal {
    return ['nmtoken', null]
}

export function ID(): Terminal {
    return ['id', null]
}

export function choice($: { [key: string]: null }): Terminal {
    return ['choice', $]
}

export function default_($: string): ['default', string] {
    return ['default', $]
}

type AttributeSet = {
    'references': AttributeRefs
    'definitions': Attributes
}

export function attributes(attributeRefs: AttributeRefs, b: Attributes): AttributeSet {
    return {
        'definitions': b,
        'references': attributeRefs,
    }
}

export function elementtype(b: ElementContent
): ElementType {
    return ['eentity',
        {
            'data': "",
        }]
}
export type Terminal = 
| ['idrefs', null]
| ['idref', null]
| ['cdata', null]
| ['nmtoken', null]
| ['choice', { [key: string]: null }]
| ['id', null]
| ['reference', string]

export function implied(): ['implied', null] {
    return ['implied', null]
}

export function required(): ['required', null] {
    return ['required', null]
}

export function fixed($: string): ['fixed', string] {
    return ['fixed', $]
}

export function ref($: string): ['ref', string] {
    return ['ref', $]
}

export type AttributeRefs = { [key: string]: null }
export type Attributes = { [key: string]: null }

export function element(text: boolean, content: ElementContent, attributeRefs: AttributeRefs, attributes: Attributes): ElementContent {
    return ['element']
}

export type Element = {
    'content': ElementContent
    'attributes': Attributes
}

export type ElementContent =
    | ['optional', ElementContent]
    | ['choice', string]
    | ['element']
    | ['reference', string]
    | ['array', {
        'data': ElementContent
        'atLeastOne': boolean
    }]
    | ['sequence', null]

    export function optional($: ElementContent): ElementContent {
        return ['optional', $]
    }
    export function array($: ElementContent, atLeastOne?: boolean): ElementContent {
        return ['array', {
            'data': $,
            'atLeastOne': atLeastOne === undefined ? false : atLeastOne
        }]
    }
export function sequence($: ElementContent[]): ElementContent {
    return ['sequence', null]
}
export function echoice($: { [key: string]: ElementContent }): ElementContent {
    return ['choice', ""]
}
export function eref($: string): ElementContent {
    return ['reference', $]
}

export type Definitions = {
    'types': {
        'terminals': { [key: string]: Terminal }
        'attribute sets': { [key: string]: AttributeSet }
        'elements': { [key: string]: ElementType }
    },
    'elements': { [key: string]: ElementContent }
}