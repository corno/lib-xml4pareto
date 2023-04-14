import * as pt from 'pareto-core-types'


export namespace N {
    
    export namespace Document {
        
        export namespace N {
            
            export namespace G {
                
                export namespace N {
                    
                    export namespace root {
                        
                        export namespace N {}
                        
                        export namespace T {}
                    }
                }
                
                export namespace T {}
            }
        }
        
        export namespace T {}
    }
    
    export namespace Element {
        
        export namespace N {
            
            export namespace G {
                
                export namespace N {
                    
                    export namespace attributes {
                        
                        export namespace N {
                            
                            export namespace D {
                                
                                export namespace N {}
                                
                                export namespace T {}
                            }
                        }
                        
                        export namespace T {}
                    }
                    
                    export namespace content {
                        
                        export namespace N {
                            
                            export namespace A {
                                
                                export namespace N {
                                    
                                    export namespace TU {
                                        
                                        export namespace N {
                                            
                                            export namespace element {
                                                
                                                export namespace N {}
                                                
                                                export namespace T {}
                                            }
                                            
                                            export namespace text {
                                                
                                                export namespace N {}
                                                
                                                export namespace T {}
                                            }
                                        }
                                        
                                        export namespace T {}
                                    }
                                }
                                
                                export namespace T {}
                            }
                        }
                        
                        export namespace T {}
                    }
                    
                    export namespace name {
                        
                        export namespace N {}
                        
                        export namespace T {}
                    }
                }
                
                export namespace T {}
            }
        }
        
        export namespace T {}
    }
}

export namespace T {
    
    export namespace Document {
        
        export type root = T.Element
    }
    
    export type Document = {
        readonly 'root': T.Element
    }
    
    export namespace Element {
        
        export namespace attributes {
            
            export type D = string
        }
        
        export type attributes = pt.Dictionary<string>
        
        export namespace content {
            
            export namespace A {
                
                export type element = T.Element
                
                export type text = string
            }
            
            export type A = 
                | ['element', T.Element]
                | ['text', string]
        }
        
        export type content = pt.Array<
            | ['element', T.Element]
            | ['text', string]
        >
        
        export type name = string
    }
    
    export type Element = {
        readonly 'attributes': pt.Dictionary<string>
        readonly 'content': pt.Array<
            | ['element', T.Element]
            | ['text', string]
        >
        readonly 'name': string
    }
}