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
        
        export type root<GAnnotation> = T.Element<GAnnotation>
    }
    
    export type Document<GAnnotation> = {
        readonly 'root': T.Element<GAnnotation>
    }
    
    export namespace Element {
        
        export namespace attributes {
            
            export type D<GAnnotation> = string
        }
        
        export type attributes<GAnnotation> = pt.Dictionary<string>
        
        export namespace content {
            
            export namespace A {
                
                export type element<GAnnotation> = T.Element<GAnnotation>
                
                export type text<GAnnotation> = string
            }
            
            export type A<GAnnotation> = 
                | ['element', T.Element<GAnnotation>]
                | ['text', string]
        }
        
        export type content<GAnnotation> = pt.Array<
            | ['element', T.Element<GAnnotation>]
            | ['text', string]
        >
        
        export type name<GAnnotation> = string
    }
    
    export type Element<GAnnotation> = {
        readonly 'attributes': pt.Dictionary<string>
        readonly 'content': pt.Array<
            | ['element', T.Element<GAnnotation>]
            | ['text', string]
        >
        readonly 'name': string
    }
}