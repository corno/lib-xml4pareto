import {
    CDATA,
    Definitions,
    ID,
    IDREF,
    IDREFS,
    NMTOKEN,
    array,
    attdef,
    attributes,
    choice,
    default_,
    echoice,
    element,
    elementtype,
    eref,
    fixed,
    implied,
    optional,
    ref,
    required,
    sequence,
    sref,
} from "./shorthands"

/*
   HTML 5 DTD

   This is the same as HTML 4 Transitional except for
   updates for the HTML 5 specication.
*/

//================ Character mnemonic entities =========================

// <!ENTITY % HTMLlat1 PUBLIC
//    "-//W3C//ENTITIES Latin 1 for XHTML//EN"
//    "html5-lat1.ent">
// %HTMLlat1;

// <!ENTITY % HTMLsymbol PUBLIC
//    "-//W3C//ENTITIES Symbols for XHTML//EN"
//    "html5-symbol.ent">
// %HTMLsymbol;

// <!ENTITY % HTMLspecial PUBLIC
//    "-//W3C//ENTITIES Special for XHTML//EN"
//    "html5-special.ent">
// %HTMLspecial;

//================== Imported Names ====================================

export const $: Definitions = {
    'types': {
        'terminals': {
            "ContentType": CDATA(), // media type, as per [RFC2045} 

            "ContentTypes": CDATA(), // comma-separated list of media types, as per [RFC2045} 

            "Charset": CDATA(), // a character encoding, as per [RFC2045} 

            "Charsets": CDATA(), // a space separated list of character encodings, as per [RFC2045} 

            "LanguageCode": NMTOKEN(), // a language code, as per [RFC3066} 

            "Character": CDATA(), // a single character, as per section 2.2 of [XML} 

            "Number": CDATA(), // one or more digits 

            "Date": CDATA(), // one or more digits 

            "LinkTypes": choice( // space-separated list of link types
                {
                    "alternate": null,
                    "archives": null,
                    "author": null,
                    "bookmark": null,
                    "contact": null,
                    "external": null,
                    "first": null,
                    "help": null,
                    "icon": null,
                    "index": null,
                    "last": null,
                    "license": null,
                    "next": null,
                    "nofollow": null,
                    "noreferrer": null,
                    "pingback": null,
                    "prefetch": null,
                    "prev": null,
                    "search": null,
                    "stylesheet": null,
                    "sidebar": null,
                    "tag": null,
                    "up": null,
                }
            ),

            "MediaDesc": choice({
                "all": null,
                "braille": null,
                "embossed": null,
                "handheld": null,
                "print": null,
                "projection": null,
                "screen": null,
                "speech": null,
                "tty": null,
                "tv": null
            }), // single or comma-separated list of media descriptors 

            "URI": CDATA(), // a Uniform Resource Identifier, see [RFC2396} 

            "UriList": CDATA(), // a space separated list of Uniform Resource Identifiers 

            "Datetime": CDATA(), // date and time information. ISO date format 

            "Script": CDATA(), // script expression 

            "StyleSheet": CDATA(), // style sheet data 

            "Text": CDATA(), // used for titles etc. 

            "FrameTarget": choice({
                "blank": null,
                "_parent": null,
                "_self": null,
                "_top": null,
            }),
            // render in this frame 

            "Length": CDATA(),
            // nn for pixels or nn% for percentage length 

            "MultiLength": CDATA(),
            // pixel, percentage, or relative 

            "Pixels": CDATA(),
            // integer representing length in pixels 

            "Boolean": choice({
                "true": null,
                "false": null
            }),

            "OlType": choice({
                "1": null,
                "a": null,
                "A": null,
                "i": null,
                "I": null,
            }),
            // ol type attribute 

            // these are used for image maps 

            "Shape": choice({
                "rect": null,
                "circle": null,
                "poly": null,
                "default": null,

            }),

            "Coords": CDATA(),
            // comma separated list of lengths 

            // a color using sRGB: #RRGGBB as Hex values 
            "Color": CDATA(),

            /*
            There are also 16 widely known color names with their sRGB values:
            
                Black  = #000000    Green  = #008000
                Silver = #C0C0C0    Lime   = #00FF00
                Gray   = #808080    Olive  = #808000
                White  = #FFFFFF    Yellow = #FFFF00
                Maroon = #800000    Navy   = #000080
                Red    = #FF0000    Blue   = #0000FF
                Purple = #800080    Teal   = #008080
                Fuchsia= #FF00FF    Aqua   = #00FFFF
            */
            // Scope is simpler than headers attribute for common tables 
            "Scope": choice({
                "row": null,
                "col": null,
                "rowgroup": null,
                "colgroup": null,

            }),
            "InputType": choice({
                "button": null,
                "checkbox": null,
                "color": null,
                "date": null,
                "datetime": null,
                "datetime-local": null,
                "email": null,
                "file": null,
                "hidden": null,
                "image": null,
                "month": null,
                "number": null,
                "password": null,
                "radio": null,
                "range": null,
                "reset": null,
                "submit": null,
                "tel": null,
                "text": null,
                "time": null,
                "url": null,
                "week": null,
            }),

            "LAlign": choice({
                "top": null,
                "bottom": null,
                "left": null,
                "right": null,
            }),
        },
        'attribute sets': {

            //=================== Generic Attributes ===============================

            /*
            core attributes common to most elements
              id       document-wide unique id
              class    space separated list of classes
              style    associated style info
              title    advisory title/amplification
            */

            "coreattrs": attributes(
                {},
                {
                    "id": attdef(ID(), implied()),
                    "class": attdef(CDATA(), implied()),
                    "style": attdef(sref("StyleSheet"), implied()),
                    "title": attdef(sref("Text"), implied()),
                }
            ),

            /*
            internationalization attributes
              lang        language code (backwards compatible),
              xml:lang    language code (as per XML 1.0 spec),
              dir         direction for weak/neutral text
            */
            "i18n": attributes(
                {},
                {
                    "lang": attdef(sref("LanguageCode"), implied()),
                    "xml:lang": attdef(sref("LanguageCode"), implied()),
                    "dir": attdef(choice({
                        "ltr": null,
                        "rtl": null,

                    }), implied()),
                }
            ),

            /*
            attributes for common UI events
              onclick     a pointer button was clicked
              ondblclick  a pointer button was double clicked
              onmousedown a pointer button was pressed down
              onmouseup   a pointer button was released
              onmousemove a pointer was moved onto the element
              onmouseout  a pointer was moved away from the element
              onkeypress  a key was pressed and released
              onkeydown   a key was pressed down
              onkeyup     a key was released
            */

            "events": attributes(
                {},
                {
                    "onclick": attdef(sref("Script"), implied()),
                    "ondblclick": attdef(sref("Script"), implied()),
                    "onmousedown": attdef(sref("Script"), implied()),
                    "onmouseup": attdef(sref("Script"), implied()),
                    "onmouseover": attdef(sref("Script"), implied()),
                    "onmousemove": attdef(sref("Script"), implied()),
                    "onmouseout": attdef(sref("Script"), implied()),
                    "onkeypress": attdef(sref("Script"), implied()),
                    "onkeydown": attdef(sref("Script"), implied()),
                    "onkeyup": attdef(sref("Script"), implied()),
                    // // HTML 5 Mouse Events - Events triggered by a mouse, or similar user actions: 
                    "ondrag": attdef(sref("Script"), implied()), // Script to be run when an element is dragged 
                    "ondragend": attdef(sref("Script"), implied()), // Script to be run at the end of a drag operation 
                    "ondragenter": attdef(sref("Script"), implied()), // Script to be run when an element has been dragged to a valid drop target 
                    "ondragleave": attdef(sref("Script"), implied()), // Script to be run when an element leaves a valid drop target 
                    "ondragover": attdef(sref("Script"), implied()), // Script to be run when an element is being dragged over a valid drop target 
                    "ondragstart": attdef(sref("Script"), implied()), // Script to be run at the start of a drag operation 
                    "ondrop": attdef(sref("Script"), implied()), // Script to be run when dragged element is being dropped 
                    "onmousewheel": attdef(sref("Script"), implied()), // Script to be run when the mouse wheel is being rotated 
                    "onscroll": attdef(sref("Script"), implied()), // Script to be run when an element's scrollbar is being scrolled 
                }
            ),

            /*
            attributes for elements that can get the focus
              accesskey   accessibility key character
              tabindex    position in tabbing order
              onfocus     the element got the focus
              onblur      the element lost the focus
            */
            "focus": attributes(
                {},
                {
                    "accesskey": attdef(sref("Character"), implied()),
                    "tabindex": attdef(sref("Number"), implied()),
                    "onfocus": attdef(sref("Script"), implied()),
                    "onblur": attdef(sref("Script"), implied()),
                }
            ),

            // HTML 5 core attributes 
            "html5attrs": attributes(
                {},
                {
                    "contenteditable": attdef(sref("Boolean"), implied()),
                    "contextmenu": attdef(ID(), implied()),
                    "draggable": attdef(choice({
                        "true": null,
                        "false": null,
                        "auto": null,
                    }), implied()),
                    "hidden": attdef(choice({ "hidden": null }), implied()),
                    "item": attdef(CDATA(), implied()),
                    "itemprop": attdef(CDATA(), implied()),
                    "spellcheck": attdef(sref("Boolean"), implied()),
                    "subject": attdef(ID(), implied()),
                    /*
                    WHY IS THIS DUPLICATED????
                    "contextmenu": attdef(ID(), implied()),
                    "contextmenu": attdef(ID(), implied()),
                    "contextmenu": attdef(ID(), implied()),
                    "contextmenu": attdef(ID(), implied()),
                    */
                }
            ),

            /*
            Media Events - Events triggered by medias like videos, images and audio.
                 Applies to all HTML 5 elements, but is most common in media elements, such
                 as audio, embed, img, object, and video.
            */
            "html5mediaevents": attributes(
                {},
                {
                    "onabort": attdef(sref("Script"), implied()),  // Script to be run on an abort event 
                    "oncanplay": attdef(sref("Script"), implied()), // Script to be run when media can start play, but might has to stop for buffering 
                    "oncanplaythrough": attdef(sref("Script"), implied()), // Script to be run when media can be played to the end, without stopping for buffering 
                    "ondurationchange": attdef(sref("Script"), implied()), // Script to be run when the length of the media is changed 
                    "onemptied": attdef(sref("Script"), implied()), // Script to be run when a media resource element suddenly becomes empty (network errors, errors on load etc.) 
                    "onended": attdef(sref("Script"), implied()), // Script to be run when media has reach the end 
                    "onerror": attdef(sref("Script"), implied()), // Script to be run when an error occurs during the loading of an element 
                    "onloadeddata": attdef(sref("Script"), implied()), // Script to be run when media data is loaded 
                    "onloadedmetadata": attdef(sref("Script"), implied()), // Script to be run when the duration and other media data of a media element is loaded 
                    "onloadstart": attdef(sref("Script"), implied()), // Script to be run when the browser starts to load the media data 
                    "onpause": attdef(sref("Script"), implied()), // Script to be run when media data is paused 
                    "onplay": attdef(sref("Script"), implied()), // Script to be run when media data is going to start playing 
                    "onplaying": attdef(sref("Script"), implied()), // Script to be run when media data has start playing 
                    "onprogress": attdef(sref("Script"), implied()), // Script to be run when the browser is fetching the media data 
                    "onratechange": attdef(sref("Script"), implied()), // Script to be run when the media data's playing rate has changed 
                    "onreadystatechange": attdef(sref("Script"), implied()), // Script to be run when the ready-state changes 
                    "onseeked": attdef(sref("Script"), implied()), // Script to be run when a media element's seeking attribute is no longer true, and the seeking has ended 
                    "onseeking": attdef(sref("Script"), implied()), // Script to be run when a media element's seeking attribute is true, and the seeking has begun 
                    "onstalled": attdef(sref("Script"), implied()), // Script to be run when there is an error in fetching media data (stalled) 
                    "onsuspend": attdef(sref("Script"), implied()), // Script to be run when the browser has been fetching media data, but stopped before the entire media file was fetched 
                    "ontimeupdate": attdef(sref("Script"), implied()), // Script to be run when media changes its playing position 
                    "onvolumechange": attdef(sref("Script"), implied()), // Script to be run when media changes the volume, also when volume is set to "mute" 
                    "onwaiting": attdef(sref("Script"), implied()), // Script to be run when media has stopped playing, but is expected to resume 
                }
            ),

            "attrs": attributes(
                {
                    "coreattrs": null,
                    "i18n": null,
                    "events": null,
                    "html5attrs": null,

                },
                {
                }
            ),

            "html": attributes(
                {},
                {
                    "id": attdef(ID(), implied()),
                    "xmlns": attdef(sref("URI"), fixed("http://www.w3.org/1999/xhtml")),
                    // HTML 5 attributes 
                    "manifest": attdef(sref("URI"), implied()),
                },
            )
        },
        'elements': {
            //=================== Text Elements ====================================

            "special.extra": elementtype(echoice({
                "object": eref("object"),
                "img": eref("img"),
                "map": eref("map"),
                "iframe": eref("iframe"),

            })),

            "special.basic": elementtype(echoice({
                "br": element(
                    false,  // forced line break 
                    sequence([]),
                    {

                        "coreattrs": null,
                        "html5attrs": null,
                    },
                    {
                    }
                ),
                "span": element(
                    true,  // generic language/style container 
                    eref("Inline"),
                    {
                        "attrs": null
                    },
                    {}
                ),
                "bdo": element(
                    true,  // I18N BiDi over-ride
                    eref("Inline"),
                    {
                        "coreattrs": null,
                        "html5attrs": null,
                        "events": null,
                    },
                    {
                        "lang": attdef(sref("LanguageCode"), implied()),
                        "xml:lang": attdef(sref("LanguageCode"), implied()),
                        "dir": attdef(choice({
                            "ltr": null,
                            "rtl": null,

                        }), required()),
                    }
                ),

            })),

            "special": elementtype(echoice({
                "%special.basic": eref("%special.basic"),
                "%special.extra": eref("%special.extra"),
            })),

            "fontstyle.basic": elementtype(echoice({
                "small": eref("small"),
                "i": element(
                    true,  // italic font
                    eref("Inline"),
                    { "attrs": null },
                    {}
                ),
                "b": element(
                    true,  // bold font
                    eref("Inline"),
                    { "attrs": null },
                    {}
                ),
                "u": element(
                    true,  // bold font
                    eref("Inline"),
                    { "attrs": null },
                    {}
                ),

            })),

            "fontstyle": elementtype(echoice({
                "%fontstyle.basic": eref("%fontstyle.basic"),
            })),

            "phrase.extra": elementtype(echoice({
                "sub": element(
                    true,  // subscript
                    eref("Inline"),
                    { "attrs": null },
                    {}
                ),
                "sup": element(
                    true,  // superscript
                    eref("Inline"),
                    { "attrs": null },
                    {}
                ),

            })),
            "phrase.basic": elementtype(echoice({
                "em": element(
                    true,  // emphasis
                    eref("Inline"),
                    { "attrs": null },
                    {}
                ),
                "strong": element(
                    true,  // strong emphasis
                    eref("Inline"),
                    { "attrs": null },
                    {}
                ),
                "dfn": element(
                    true,  // definitional
                    eref("Inline"),
                    { "attrs": null },
                    {}
                ),
                "code": element(
                    true,  // program code
                    eref("Inline"),
                    { "attrs": null },
                    {}
                ),
                "q": element(
                    true,  // inlined quote
                    eref("Inline"),
                    { "attrs": null },
                    {
                        "cite": attdef(sref("URI"), implied()),
                    }
                ),
                "samp": element(
                    true,  // sample
                    eref("Inline"),
                    { "attrs": null },
                    {}
                ),
                "kbd": element(
                    true,  // something user would type
                    eref("Inline"),
                    { "attrs": null },
                    {}
                ),
                "var": element(
                    true,  // variable
                    eref("Inline"),
                    { "attrs": null },
                    {}
                ),
                "cite": element(
                    true,  // citation
                    eref("Inline"),
                    { "attrs": null },
                    {}
                ),
                "abbr": element(
                    true, // abbreviation
                    eref("Inline"),
                    { "attrs": null },
                    {}
                ),
                "acronym": element(
                    true,
                    eref("Inline"),
                    { "attrs": null },
                    {}
                ),

            })),

            "phrase": elementtype(echoice({
                "phrase.basic": eref("phrase.basic"),
                "phrase.extra": eref("phrase.extra"),
            })),

            "inline.forms": elementtype(echoice({
                "input": element(
                    false,  // form control 
                    sequence([]),
                    {
                        "attrs": null,
                        "focus": null,
                    },
                    {
                        "type": attdef(sref("InputType"), ref("text")),
                        "name": attdef(CDATA(), implied()),
                        "value": attdef(CDATA(), implied()),
                        "checked": attdef(choice({ "checked": null }), implied()),
                        "disabled": attdef(choice({ "disabled": null }), implied()),
                        "readonly": attdef(choice({ "readonly": null }), implied()),
                        "maxlength": attdef(sref("Number"), implied()),
                        "src": attdef(sref("URI"), implied()),
                        "alt": attdef(CDATA(), implied()),
                        "usemap": attdef(sref("URI"), implied()),
                        "onselect": attdef(sref("Script"), implied()),
                        "onchange": attdef(sref("Script"), implied()),
                        "accept": attdef(sref("ContentTypes"), implied()),
                        // HTML 5 attributes 
                        "autocomplete": attdef(choice({
                            "on": null,
                            "off": null,
                            "name": null,
                            "honorific-prefix": null,
                            "given-name": null,
                            "additional-name": null,
                            "family-name": null,
                            "honorific-suffix": null,
                            "nickname": null,
                            "email": null,
                            "username": null,
                            "new-password": null,
                            "current-password": null,
                            "organization-title": null,
                            "organization": null,
                            "street-address": null,
                            "address-line1": null,
                            "address-line2": null,
                            "address-line3": null,
                            "address-level4": null,
                            "address-level3": null,
                            "address-level2": null,
                            "address-level1": null,
                            "country": null,
                            "country-name": null,
                            "postal-code": null,
                            "cc-name": null,
                            "cc-given-name": null,
                            "cc-additional-name": null,
                            "cc-family-name": null,
                            "cc-number": null,
                            "cc-exp": null,
                            "cc-exp-month": null,
                            "cc-exp-year": null,
                            "cc-csc": null,
                            "cc-type": null,
                            "transaction-currency": null,
                            "transaction-amount": null,
                            "language": null,
                            "bday": null,
                            "bday-day": null,
                            "bday-month": null,
                            "bday-year": null,
                            "sex": null,
                            "tel": null,
                            "tel-country-code": null,
                            "tel-national": null,
                            "tel-area-code": null,
                            "tel-local": null,
                            "tel-extension": null,
                            "impp": null,
                            "url": null,
                            "photo": null,

                        }), implied()),
                        "autofocus": attdef(CDATA(), implied()),
                        "form": attdef(CDATA(), implied()),
                        "formaction": attdef(sref("URI"), implied()),
                        "formemctype": attdef(choice({
                            "application/x-www-form-urlencoded": null,
                            "multipart/form-data": null,
                            "text/plain": null,

                        }), implied()),
                        "formmethod": attdef(choice({
                            "delete": null,
                            "get": null,
                            "post": null,
                            "put": null,

                        }), implied()),
                        "formvalidate": attdef(CDATA(), implied()),
                        "formtarget": attdef(choice({
                            "_blank": null,
                            "_self": null,
                            "_parent": null,
                            "_top": null,

                        }), implied()),
                        "height": attdef(sref("Pixels"), implied()),
                        "list": attdef(ID(), implied()),
                        "max": attdef(sref("Number"), implied()),
                        "min": attdef(sref("Number"), implied()),
                        "multiple": attdef(CDATA(), implied()),
                        "pattern": attdef(CDATA(), implied()),
                        "placeholder": attdef(CDATA(), implied()),
                        "required": attdef(CDATA(), implied()),
                        "step": attdef(sref("Number"), implied()),
                        "width": attdef(sref("Pixels"), implied()),
                    }
                ),
                "output": element(
                    false,
                    sequence([]),
                    {
                        "attrs": null
                    },
                    {
                        "for": attdef(ID(), implied()),
                        "form": attdef(CDATA(), implied()),
                        "name": attdef(CDATA(), implied()),
                    }
                ),
                "select": element(
                    false,
                    array(echoice({
                        "optgroup": element(
                            false,
                            array(eref("option"), true), // option group 
                            {
                                "attrs": null,
                            },
                            {
                                "disabled": attdef(choice({ "disabled": null }), implied()),
                                "label": attdef(sref("Text"), required()),
                            }
                        ),
                        "option": eref("option"),
                    }), true), // option selector 
                    {
                        "attrs": null,
                    },
                    {
                        "name": attdef(CDATA(), implied()),
                        "multiple": attdef(choice({ "multiple": null }), implied()),
                        "disabled": attdef(choice({ "disabled": null }), implied()),
                        "tabindex": attdef(sref("Number"), implied()),
                        "onfocus": attdef(sref("Script"), implied()),
                        "onblur": attdef(sref("Script"), implied()),
                        "onchange": attdef(sref("Script"), implied()),
                        // HTML 5 attributes 
                        "autofocus": attdef(choice({ "autofocus": null }), implied()),
                        "form": attdef(CDATA(), implied()),
                    }
                ),
                "textarea": element(
                    true,  // multi-line text field 
                    sequence([]),
                    {
                        "attrs": null,
                        "focus": null,
                    },
                    {
                        "name": attdef(CDATA(), implied()),
                        "rows": attdef(sref("Number"), required()),
                        "cols": attdef(sref("Number"), required()),
                        "disabled": attdef(choice({ "disabled": null }), implied()),
                        "readonly": attdef(choice({ "readonly": null }), implied()),
                        "onselect": attdef(sref("Script"), implied()),
                        "onchange": attdef(sref("Script"), implied()),
                        // HTML 5 attributes 
                        "autofocus": attdef(CDATA(), implied()),
                        /* WHY IS THIS DUPLICATED
                        "cols": attdef(sref("Number"), implied()),
                        */
                        "form": attdef(CDATA(), implied()),
                        "maxlength": attdef(sref("Number"), implied()),
                        "placeholder": attdef(CDATA(), implied()),
                        "required": attdef(CDATA(), implied()),
                        "wrap": attdef(choice({
                            "hard": null,
                            "soft": null,

                        }), default_("soft")),
                    }
                ),
                /*
                  Each label must not contain more than ONE field
                  Label elements shouldn't be nested.
                */
                "label": element(
                    true,
                    eref("Inline"),
                    {
                        "attrs": null
                    },
                    {
                        "for": attdef(IDREF(), implied()),
                        //HTML 5 attributes 
                        "form": attdef(CDATA(), implied()),
                    }
                ),

                "button": element(
                    true,  // push button
                    eref("button.content"),
                    {
                        "attrs": null,
                        "focus": null,
                    },
                    {
                        "name": attdef(CDATA(), implied()),
                        "value": attdef(CDATA(), implied()),
                        "type": attdef(choice({
                            "button": null,
                            "submit": null,
                            "reset": null,

                        }), default_("submit")),
                        "disabled": attdef(choice({ "disabled": null }), implied()),
                        // HTML 5 attributes 
                        "autofocus": attdef(CDATA(), implied()),
                        "form": attdef(CDATA(), implied()),
                        "formaction": attdef(sref("URI"), implied()),
                        "formemctype": attdef(choice({
                            "application/x-www-form-urlencoded": null,
                            "multipart/form-data": null,
                            "text/plain": null,
                        }), implied()),
                        "formmethod": attdef(choice({
                            "delete": null,
                            "get": null,
                            "post": null,
                            "put": null,
                        }), implied()),
                        "formvalidate": attdef(CDATA(), implied()),
                        "formtarget": attdef(choice({
                            "blank": null,
                            "_self": null,
                            "_parent": null,
                            "_top": null,
                        }), implied()),
                    }
                ),
                "datetime": element(
                    true,
                    sequence([]),
                    { "attrs": null },
                    {}
                ),

                "datetime-local": element(
                    true,
                    sequence([]),
                    { "attrs": null },
                    {}
                ),

                "date": element(
                    true,
                    sequence([]),
                    { "attrs": null },
                    {}
                ),

                "month": element(
                    true,
                    sequence([]),
                    { "attrs": null },
                    {}
                ),
                "week": element(
                    true,
                    sequence([]),
                    { "attrs": null },
                    {}
                ),

                "time": element(
                    true,
                    sequence([]),
                    {
                        "attrs": null,
                    },
                    {
                        "datetime": attdef(sref("Date"), implied()),
                    }
                ),
                "number": element(
                    true,
                    sequence([]),
                    { "attrs": null },
                    {}
                ),

                "range": element(
                    true,
                    sequence([]),
                    { "attrs": null },
                    {}
                ),
                "email": element(
                    true,
                    sequence([]),
                    { "attrs": null },
                    {}
                ),
                "url": element(
                    true,
                    sequence([]),
                    { "attrs": null },
                    {}
                ),
                "menu": element(
                    true,
                    echoice({
                        "command": element(
                            false,
                            sequence([]),
                            {
                                "attrs": null
                            },
                            {
                                "checked": attdef(CDATA(), implied()),
                                "disabled": attdef(CDATA(), implied()),
                                "icon": attdef(sref("URI"), implied()),
                                "label": attdef(CDATA(), implied()),
                                "radiogroup": attdef(CDATA(), implied()),
                                "type": attdef(choice({
                                    "checkbox": null,
                                    "command": null,
                                    "radio": null,

                                }), default_("command")),
                            }
                        ),
                    }),
                    {
                        "attrs": null
                    },
                    {
                        "label": attdef(CDATA(), implied()),
                        "type": attdef(choice({
                            "context": null,
                            "toolbar": null,
                            "list": null,

                        }), default_("list")),

                    }
                ),
                "datalist": element(
                    true,
                    sequence([]),
                    { "attrs": null },
                    {},
                ),

            })),

            // these can occur at block or inline level 
            "misc.inline": elementtype(echoice({
                /*
                  ins/del are allowed in block and inline content, but its
                  inappropriate to include block content within an ins element
                  occurring in inline content.
                */
                "ins": element(
                    true,
                    eref("Flow"),
                    {
                        "attrs": null
                    },
                    {
                        "cite": attdef(sref("URI"), implied()),
                        "datetime": attdef(sref("Datetime"), implied()),
                    }
                ),

                "del": element(
                    true,
                    eref("Flow"),
                    {
                        "attrs": null
                    },
                    {
                        "cite": attdef(sref("URI"), implied()),
                        "datetime": attdef(sref("Datetime"), implied()),
                    }
                ),

                "script": eref("script"),

            })),

            // these can only occur at block level 
            "misc": elementtype(echoice({
                // alternate content container for non script-based rendering 

                "noscript": element(
                    true,
                    eref("Flow"),
                    {
                        "attrs": null
                    },
                    {}
                ),
                "misc.inline": eref("misc.inline"),
            })),

            "inline": elementtype(echoice({
                "a": eref("a"),
                "special": eref("special"), "fontstyle": eref("fontstyle"), "phrase": eref("phrase"), "inline.forms": eref("inline.forms"),
            })),

            // %Inline; covers inline or "text-level" elements 
            "Inline": elementtype(array(echoice({
                "inline": eref("inline"),
                "misc.inline": eref("misc.inline"),

            }))),

            //================== Block level elements ==============================

            "heading": elementtype(echoice({
                /*
                  There are six levels of headings from h1 (the most important),
                  to h6 (the least important).
                */

                "h1 ": element(
                    true,
                    eref("Inline"),
                    {
                        "attrs": null
                    },
                    {}
                ),

                "h2": element(
                    true,
                    eref("Inline"),
                    {
                        "attrs": null
                    },
                    {}
                ),

                "h3": element(
                    true,
                    eref("Inline"),
                    {
                        "attrs": null
                    },
                    {}
                ),

                "h4": element(
                    true,
                    eref("Inline"),
                    {
                        "attrs": null
                    },
                    {}
                ),

                "h5": element(
                    true,
                    eref("Inline"),
                    {
                        "attrs": null
                    },
                    {}
                ),
                "h6": element(
                    true,
                    eref("Inline"),
                    {
                        "attrs": null
                    },
                    {}
                ),

            })),
            "lists": elementtype(echoice({        // Unordered list 

                "ul": element(
                    false,
                    array(eref("li"), true),
                    {
                        "attrs": null
                    },
                    {}
                ),

                // Ordered (numbered) list 

                "ol": element(
                    false,
                    array(eref("li"), true),
                    {
                        "attrs": null
                    },
                    {
                        "type": attdef(sref("OlType"), implied()),
                        "start": attdef(sref("Number"), implied()),
                        // HTML 5 attributes 
                        "reversed": attdef(choice({ "reversed": null }), implied()),
                    }
                ),

                // definition lists - dt for term, dd for its definition 

                "dl": element(
                    false,
                    array(echoice({
                        "dt": element(
                            true,
                            eref("Inline"),
                            {
                                "attrs": null
                            },
                            {}
                        ),

                        "dd": element(
                            true,
                            eref("Flow"),
                            {
                                "attrs": null
                            },
                            {}
                        ),

                    }), true),
                    {
                        "attrs": null
                    },
                    {}
                ),

            })),
            "blocktext": elementtype(echoice({
                /*
                 content is %Inline; excluding 
                        "img|object|small|sub|sup"
                */

                "pre": element(
                    true,
                    eref("pre.content"),
                    {
                        "attrs": null
                    },
                    {}
                ),
                "hr": element(
                    false,  //horizontal rule
                    sequence([]),
                    {
                        "attrs": null
                    },
                    {}
                ),
                "blockquote": element(
                    true,  //Block-like Quotes
                    eref("Flow"),
                    {
                        "attrs": null
                    },
                    {
                        "cite": attdef(sref("URI"), implied()),
                    }
                ),
                "address": element(
                    true,
                    array(echoice({
                        "inline": eref("inline"),
                        "misc.inline": eref("misc.inline"),
                        "p": eref("p"),

                    })),
                    {
                        "attrs": null
                    },
                    {}
                ),
                "article": element(
                    true,
                    sequence([]),
                    {
                        "attrs": null,
                    },
                    {
                        "cite": attdef(sref("URI"), implied()),
                        "pubdate": attdef(sref("Date"), implied()),
                    }
                ),
                "aside": element(
                    true,
                    sequence([]),
                    { "attrs": null },
                    {}
                ),
                "summary": element(
                    true,
                    sequence([]),
                    { "attrs": null },
                    {}
                ),
                "mark": element(
                    true,
                    sequence([]),
                    { "attrs": null },
                    {}
                ),

            })),

            "block": elementtype(echoice({
                "p": eref("p"),
                "heading": eref("heading"),
                "div": eref("div"),

                "lists": eref("lists"),
                "blocktext": eref("blocktext"),
                /*
                  The fieldset element is used to group form fields.
                  Only one legend element should occur in the content
                  and if present should only be preceded by whitespace.
                */
                "fieldset": element(
                    true,
                    array(echoice({
                        "legend": element(
                            true,  // fieldset label
                            eref("Inline"),
                            {
                                "attrs": null,
                            },
                            {
                                "accesskey": attdef(sref("Character"), implied()),
                            }
                        ),
                        "block": eref("block"),
                        "form": eref("form"),
                        "inline": eref("inline"),
                        "misc": eref("misc"),

                    })),
                    {
                        "attrs": null,
                    },
                    {
                        // HTML 5 attributes 
                        "disabled": attdef(CDATA(), implied()),
                        "form": attdef(CDATA(), implied()),
                        "name": attdef(CDATA(), implied()),
                    }
                ),
                "table": eref("table"),
                "header": element(
                    true,
                    sequence([]),
                    { "attrs": null },
                    {}
                ),
                "footer": element(
                    true,
                    sequence([]),
                    { "attrs": null },
                    {}
                ),

                "section": element(
                    true,
                    sequence([]),
                    {
                        "attrs": null,
                    },
                    {
                        "cite": attdef(sref("URI"), implied()),
                    }
                ),
                "hgroup": element(
                    true,
                    sequence([]),
                    { "attrs": null },
                    {}
                ),

                "main": element(
                    true,
                    sequence([]),
                    { "attrs": null },
                    {}
                ),
                "nav": element(
                    true,
                    sequence([]),
                    { "attrs": null },
                    {}
                ),
                "dialog": element(
                    true,
                    sequence([]),
                    { "attrs": null },
                    {}
                ),
                "figure": element(
                    true,
                    echoice({
                        "figcaption": element(
                            false,
                            sequence([]),
                            { "attrs": null },
                            {}
                        ),

                    }),
                    { "attrs": null },
                    {}
                ),
                "datagrid": eref("datagrid"),
                "canvas": element(
                    false,
                    sequence([]),
                    {
                        "attrs": null,
                    },
                    {
                        "height": attdef(sref("Pixels"), implied()),
                        "width": attdef(sref("Pixels"), implied()),
                    }
                ),
                "audio": element(
                    false,
                    sequence([]),
                    {
                        "attrs": null,
                        "html5mediaevents": null,

                    },
                    {
                        "autoplay": attdef(CDATA(), implied()),
                        "controls": attdef(CDATA(), implied()),
                        "preload": attdef(CDATA(), implied()),
                        "src": attdef(sref("URI"), implied()),
                    }
                ),
                "video": element(
                    false,
                    sequence([]),
                    {
                        "attrs": null,
                        "html5mediaevents": null,
                    },
                    {
                        "autoplay": attdef(CDATA(), implied()),
                        "controls": attdef(CDATA(), implied()),
                        "height": attdef(sref("Pixels"), implied()),
                        "loop": attdef(CDATA(), implied()),
                        "preload": attdef(CDATA(), implied()),
                        "src": attdef(sref("URI"), implied()),
                        "width": attdef(sref("Pixels"), implied()),
                    }
                ),
                "source": element(
                    false,
                    sequence([]),
                    {
                        "attrs": null,
                        "html5mediaevents": null,
                    },
                    {
                        "media": attdef(CDATA(), implied()),
                        "src": attdef(sref("URI"), implied()),
                        "type": attdef(sref("Number"), implied()),
                    }
                ),
                "embed": element(
                    false,
                    sequence([]),
                    {
                        "attrs": null,
                        "html5mediaevents": null,

                    },
                    {
                        "height": attdef(sref("Pixels"), implied()),
                        "src": attdef(sref("URI"), implied()),
                        "type": attdef(CDATA(), implied()),
                        "width": attdef(sref("Pixels"), implied()),
                    }
                ),
                "keygen": element(
                    false,
                    sequence([]),
                    { "attrs": null },
                    {
                        "autofocus": attdef(choice({ "disabled": null }), implied()),
                        "challenge": attdef(CDATA(), implied()),
                        "disabled": attdef(CDATA(), implied()),
                        "form": attdef(CDATA(), implied()),
                        "keytype": attdef(choice({ "rsa": null }), implied()),
                        "name": attdef(CDATA(), implied()),
                    }
                ),
                "progress": element(
                    true,
                    sequence([]),
                    {
                        "attrs": null
                    },
                    {
                        "max": attdef(sref("Number"), implied()),
                        "value": attdef(sref("Number"), implied()),
                    }
                ),
                "ruby": element(
                    false,
                    echoice({
                        "rt_array": array(eref("rt"), true),
                        "rp_array": array(eref("rp"), true),
                    }),
                    { "attrs": null },
                    {}
                ),

            })),

            // %Flow; mixes block and inline and is used for list items etc. 
            "Flow": elementtype(array(echoice({
                "block": eref("block"),
                "form": eref("form"),
                "inline": eref("inline"),
                "misc": eref("misc"),

            }))),

            //================== Content models for exclusions =====================

            // a elements use %Inline; excluding a 

            "a.content": elementtype(array(echoice({
                "special": eref("special"),
                "fontstyle": eref("fontstyle"),
                "phrase": eref("phrase"),
                "inline.forms": eref("inline.forms"),
                "misc.inline": eref("misc.inline"),

            }))),

            // pre uses %Inline excluding img, object, big, small 

            "pre.content": elementtype(array(echoice({
                "a": eref("a"),
                "special.basic": eref("special.basic"),
                "fontstyle.basic": eref("fontstyle.basic"),
                "phrase.basic": eref("phrase.basic"),
                "inline.forms": eref("inline.forms"),
                "misc.inline": eref("misc.inline"),

            }))),

            // form uses %Flow; excluding form 

            "form.content": elementtype(array(echoice({
                "block": eref("block"),
                "inline": eref("inline"),
                "misc": eref("misc"),

            }))),

            // button uses %Flow; but excludes a, form, form controls, iframe 

            "button.content": elementtype(array(echoice({
                "p": eref("a"),
                "heading": eref("heading"),
                "div": eref("div"),
                "lists": eref("lists"),
                "blocktext": eref("blocktext"),
                "table": eref("table"),
                "datagrid": eref("datagrid"),
                "special.basic": eref("special.basic"),
                "object": eref("object"),
                "img": eref("img"),
                "map": eref("map"),
                "fontstyle": eref("fontstyle"),
                "phrase": eref("phrase"),
                "misc": eref("misc"),

            }))),

            "head.misc": elementtype(array(echoice({
                "script": eref("script"),
                // style info, which may include CDATA sections 
                "style": element(
                    true,
                    sequence([]),
                    {
                        "i18n": null,
                    },
                    {
                        "id": attdef(ID(), implied()),
                        "type": attdef(choice({ "text/css": null }), required()),
                        "media": attdef(sref("MediaDesc"), implied()),
                        // HTML 5 attributes 
                        "scoped": attdef(choice({ "scoped": null }), implied()),
                    }
                ),
                // generic metainformation 
                "meta": element(
                    false,
                    sequence([]),
                    {
                        "i18n": null,
                    },
                    {
                        "id": attdef(ID(), implied()),
                        "http-equiv": attdef(CDATA(), implied()),
                        "name": attdef(CDATA(), implied()),
                        "content": attdef(CDATA(), required()),
                        //HTML 5 attributes 
                        "charset": attdef(sref("Charset"), implied()),
                    }
                ),
                /*
                  Relationship values can be used in principle:
                
                   a) for document specific toolbars/menus when used
                      with the link element in document head e.g.
                        start, contents, previous, next, index, end, help
                   b) to link to a separate style sheet (rel="stylesheet"),
                   c) to make a link to a script (rel="script"),
                   d) by stylesheets to control how collections of
                      html nodes are rendered into printed documents
                   e) to make a link to a printable version of this document
                      e.g. a PostScript or PDF version (rel="alternate" media="print"),
                */

                "link": element(
                    false,
                    sequence([]),
                    {
                        "attrs": null
                    },
                    {
                        "href": attdef(sref("URI"), implied()),
                        "hreflang": attdef(sref("LanguageCode"), implied()),
                        "type": attdef(sref("ContentType"), implied()),
                        "rel": attdef(sref("LinkTypes"), implied()),
                        "media": attdef(sref("MediaDesc"), implied()),
                        // HTML 5 attributes 
                        "sizes": attdef(sref("Number"), implied()),
                    }
                ),
                "object": eref("object"),

            }))), //Document Head


        },
    },
    'elements': {
        //================ Document Structure ==================================

        // the namespace URI designates the document profile 

        "html_for_writing": element(
            false,
            sequence([eref("head_for_writing"), eref("body")]),
            {
                "i18n": null,
                "html": null,
            },
            {}
        ),
        "html_for_consuming": element(
            false,
            sequence([eref("head_for_consuming"), eref("body")]),
            {
                "i18n": null,
                "html": null,
            },
            {}
        ),

        //================ Document Head =======================================

        /*
        content model is %head.misc; combined with a single
             title and an optional base element in any order
        */

        "head_for_writing": element(
            false,
            sequence([
                eref("head"),
                optional(eref("base")),
                eref("head.misc"),
            ]),
            {
                "i18n": null,
            },
            {
                "id": attdef(ID(), implied()),
                "profile": attdef(sref("URI"), implied()),
            }
        ),

        "head_for_consuming": element(
            false,
            array(echoice({
                "head": eref("head"),
                "base": eref("base"),
                "misc": eref("head.misc"),
            })),
            {
                "i18n": null,
            },
            {
                "id": attdef(ID(), implied()),
                "profile": attdef(sref("URI"), implied()),
            }
        ),

        /* The title element is not considered part of the flow of text.
               It should be displayed, for example as the page header or
               window title. Exactly one title is required per document.
            */
        "title": element(
            true,
            sequence([]),
            {
                "i18n": null,
            },
            {
                "id": attdef(ID(), implied()),
            }
        ),

        // document base URI 

        "base": element(
            false,
            sequence([]),
            {},
            {
                "id": attdef(ID(), implied()),
                "href": attdef(sref("URI"), implied()),
                "target": attdef(sref("FrameTarget"), implied()),
            }
        ),




        // script statements, which may include CDATA sections 
        "script": element(
            true,
            sequence([]),
            {},
            {
                "id": attdef(ID(), implied()),
                "charset": attdef(sref("Charset"), implied()),
                "type": attdef(choice({ "text/javascript": null }), required()),
                "language": attdef(CDATA(), implied()),
                "src": attdef(sref("URI"), implied()),
                "defer": attdef(choice({ "defer": null }), implied()),
                // HTML 5 attributes 
                "async": attdef(choice({ "async": null }), implied()),
            }
        ),


        //======================= Frames =======================================

        // inline subwindow 

        "iframe": element(
            true,
            eref("Flow"),
            {
                "coreattrs": null,
                "html5attrs": null,
            },
            {
                "name": attdef(NMTOKEN(), implied()),
                "src": attdef(sref("URI"), implied()),
                "height": attdef(sref("Length"), implied()),
                "width": attdef(sref("Length"), implied()),
                // HTML 5 attributes 
                "sandbox": attdef(choice({
                    "allow-forms": null,
                    "allow-same-origin": null,
                    "allow-scripts": null,
                }), implied()),
                "seamless": attdef(CDATA(), implied()),
                "srcdoc": attdef(CDATA(), implied()),
            }
        ),

        //=================== Document Body ====================================

        "body": element(
            true,
            eref("Flow"),
            {
                "attrs": null
            },
            {
                "onload": attdef(sref("Script"), implied()),
                "onunload": attdef(sref("Script"), implied()),
                // // HTML 5 Window Event Attributes 
                "onafterprint": attdef(sref("Script"), implied()), // Script to be run after the document is printed 
                "onbeforeprint": attdef(sref("Script"), implied()), // Script to be run before the document is printed 
                "onbeforeonload": attdef(sref("Script"), implied()), // Script to be run before the document loads 
                "onerror": attdef(sref("Script"), implied()), // Script to be run when an error occur 
                "onhaschange": attdef(sref("Script"), implied()), // Script to be run when the document has change 
                "onmessage": attdef(sref("Script"), implied()), // Script to be run when the message is triggered 
                "onoffline": attdef(sref("Script"), implied()), // Script to be run when the document goes offline 
                "ononline": attdef(sref("Script"), implied()), // Script to be run when the document comes online 
                "onpagehide": attdef(sref("Script"), implied()), // Script to be run when the window is hidden 
                "onpageshow": attdef(sref("Script"), implied()), // Script to be run when the window becomes visible 
                "onpopstate": attdef(sref("Script"), implied()), // Script to be run when the window's history changes 
                "onredo": attdef(sref("Script"), implied()), // Script to be run when the document performs a redo 
                "onresize": attdef(sref("Script"), implied()), // Script to be run when the window is resized 
                "onstorage": attdef(sref("Script"), implied()), // Script to be run when a document loads 
                "onundo": attdef(sref("Script"), implied()), // Script to be run when a document performs an undo 
                /* WHY IS THIS DUPLICATED
                "onunload": attdef(sref("Script"), implied()), // Script to be run when the user leaves the document 
                */
            }
        ),

        "div": element(
            true,  // generic language/style container 
            eref("Flow"),
            {
                "attrs": null
            },
            {}
        ),

        //=================== Paragraphs =======================================

        "p": element(
            true,
            eref("Inline"),
            {
                "attrs": null
            },
            {}
        ),

        //=================== Headings =========================================


        //=================== Lists ============================================


        // list item 

        "li": element(
            true,
            eref("Flow"),
            {
                "attrs": null
            },
            {
                "value": attdef(sref("Number"), implied()),
            }
        ),




        //================== The Anchor Element ================================

        // content is %Inline; except that anchors shouldn't be nested 

        "a": element(
            true,
            eref("a.content"),
            {
                "attrs": null,
                "focus": null,
            },
            {
                "href": attdef(sref("URI"), implied()),
                "hreflang": attdef(sref("LanguageCode"), implied()),
                "rel": attdef(sref("LinkTypes"), implied()),
                "target": attdef(sref("FrameTarget"), implied()),
                // HTML 5 attributes 
                "media": attdef(CDATA(), implied()),
                "ping": attdef(sref("URI"), implied()),
                "type": attdef(sref("ContentType"), implied()),
            }
        ),

        //===================== Inline Elements ================================

        "small": element(
            true,  // smaller font
            eref("Inline"),
            { "attrs": null },
            {}
        ),

        //==================== Object ======================================
        /*
          object is used to embed objects as part of HTML pages.
          param elements should precede other content. Parameters
          can also be expressed as attribute/value pairs on the
          object element itself when brevity is desired.
        */

        "object": element(
            true,
            array(echoice({
                /*
                  param is used to supply a named property value.
                  In XML it would seem natural to follow RDF and support an
                  abbreviated syntax where the param elements are replaced
                  by attribute value pairs on the object start tag.
                */
                "param": element(
                    false,
                    sequence([]),
                    {},
                    {
                        "id": attdef(ID(), implied()),
                        "name": attdef(CDATA(), required()),
                        "value": attdef(CDATA(), implied()),
                    }
                ),
                "block": eref("block"),
                "form": eref("form"),
                "inline": eref("inline"),
                "misc": eref("misc"),

            })),
            {
                "attrs": null,
                "html5mediaevents": null
            },
            {
                "data": attdef(sref("URI"), implied()),
                "type": attdef(sref("ContentType"), implied()),
                "height": attdef(sref("Length"), implied()),
                "width": attdef(sref("Length"), implied()),
                "usemap": attdef(sref("URI"), implied()),
                "name": attdef(NMTOKEN(), implied()),
                "tabindex": attdef(sref("Number"), implied()),
                // HTML 5 attributes 
                "form": attdef(CDATA(), implied()),
            }
        ),


        //=================== Images ===========================================

        /*
           To avoid accessibility problems for people who aren't
           able to see the image, you should provide a text
           description using the alt and longdesc attributes.
           In addition, avoid the use of server-side image maps.
        */

        "img": element(
            false,
            sequence([]),
            {
                "attrs": null,
                "html5mediaevents": null
            },
            {
                "src": attdef(sref("URI"), required()),
                "alt": attdef(sref("Text"), required()),
                "name": attdef(NMTOKEN(), implied()),
                "longdesc": attdef(sref("URI"), implied()),
                "height": attdef(sref("Length"), implied()),
                "width": attdef(sref("Length"), implied()),
                "usemap": attdef(sref("URI"), implied()),
                "ismap": attdef(choice({ "ismap": null }), implied()),
            }
        ),

        /* usemap points to a map element which may be in this document
          or an external document, although the latter is not widely supported */

        //================== Client-side image maps ============================

        /* These can be placed in the same document or grouped in a
             separate document although this isn't yet widely supported */

        "map": element(
            false,
            array(echoice({
                "composed": array(echoice({
                    "block": eref("block"),
                    "form": eref("form"),
                    "misc": eref("misc"),
                }), true),
                "area": element(
                    false,
                    sequence([]),
                    {
                        "attrs": null,
                        "focus": null,
                    },
                    {
                        "shape": attdef(sref("Shape"), default_("rect")),
                        "coords": attdef(sref("Coords"), implied()),
                        "href": attdef(sref("URI"), implied()),
                        "alt": attdef(sref("Text"), required()),
                        "target": attdef(sref("FrameTarget"), implied()),
                        // HTML 5 attributes 
                        "hreflang": attdef(sref("LanguageCode"), implied()),
                        "media": attdef(CDATA(), implied()),
                        "ping": attdef(sref("URI"), implied()),
                        "rel": attdef(sref("LinkTypes"), implied()),
                        "type": attdef(CDATA(), implied()),
                    }
                ),
            }), true),
            {
                "i18n": null,
                "events": null,
            },
            {
                "id": attdef(ID(), required()),
                "class": attdef(CDATA(), implied()),
                "style": attdef(sref("StyleSheet"), implied()),
                "title": attdef(sref("Text"), implied()),
                "name": attdef(CDATA(), implied()),
            }
        ),


        //================ Forms ===============================================

        "form": element(
            true,
            eref("form.content"), // forms shouldn't be nested 
            {
                "attrs": null,
            },
            {
                "action": attdef(sref("URI"), required()),
                "method": attdef(choice({
                    "get": null,
                    "post": null,

                }), default_("get")),
                "name": attdef(NMTOKEN(), implied()),
                "enctype": attdef(sref("ContentType"), default_("application/x-www-form-urlencoded")),
                "onsubmit": attdef(sref("Script"), implied()),
                "accept-charset": attdef(sref("Charset"), implied()),
                "target": attdef(sref("FrameTarget"), implied()),
                //HTML 5 Attributes 
                "autocomplete": attdef(choice({
                    "on": null,
                    "off": null,

                }), implied()),
                "novalidate": attdef(CDATA(), implied()),
                //HTML 5 Form Events
                //  Applies to all HTML 5 elements, but is most common in form elements:
                "oncontextmenu": attdef(sref("Script"), implied()),
                "onformchange": attdef(sref("Script"), implied()),
                "onforminput": attdef(sref("Script"), implied()),
                /* WHY IS THIS DUPLICATED
                "onforminput": attdef(sref("Script"), implied()),
                */
                "oninput": attdef(sref("Script"), implied()),
                /* WHY IS THIS DUPLICATED
                "onforminput": attdef(sref("Script"), implied()),
                */
                "oninvalid": attdef(sref("Script"), implied()),
            }
        ),

        // the name attribute is required for all but submit & reset 


        "option": element(
            true,
            sequence([]), // selectable choice 
            {
                "attrs": null,
            },
            {
                "selected": attdef(choice({ "selected": null }), implied()),
                "disabled": attdef(choice({ "disabled": null }), implied()),
                "label": attdef(sref("Text"), implied()),
                "value": attdef(CDATA(), implied()),
            }
        ),



        /*
         Content is %Flow; excluding a, form, form controls, iframe
        */

        //======================= Tables =======================================

        // Derived from IETF HTML table standard, see [RFC1942} 

        // "table": element(
        //     false,
        //     sequence(["caption?", "(col*|colgroup*), thead?, tfoot?, (tbody+|tr+))"]),
        //     {
        //         "attrs": null,
        //     },
        //     {
        //         "summary": attdef(sref("Text"), implied()),
        //     }
        // ),
        "caption": element(
            true,
            eref("Inline"),
            {
                "attrs": null,
            },
            {}
        ),

        /*
            Use thead to duplicate headers when breaking table
            across page boundaries, or for static headers when
            tbody sections are rendered in scrolling panel.
    
            Use tfoot to duplicate footers when breaking table
            across page boundaries, or for static footers when
            tbody sections are rendered in scrolling panel.
    
            Use multiple tbody sections when rules are needed
            between groups of table rows.
        */
        "thead": element(
            false,
            array(eref("tr"), true),
            {
                "attrs": null
            },
            {}
        ),
        "tfoot": element(
            false,
            array(eref("tr"), true),
            {
                "attrs": null
            },
            {}
        ),
        "tbody": element(
            false,
            array(eref("tr"), true),
            {
                "attrs": null
            },
            {}
        ),
        /*
        colgroup groups a set of col elements. It allows you to group
        several semantically related columns together.
        */
        "colgroup": element(
            false,
            array(echoice({
                "col": eref("col"),

            })),
            {
                "attrs": null
            },
            {
                "span": attdef(sref("Number"), default_("1")),
            }
        ),

        /*
         col elements define the alignment properties for cells in
         one or more columns.
    
         The span attribute causes the attributes of one
         col element to apply to more than one column.
        */
        "col": element(
            false,
            sequence([]),
            {
                "attrs": null
            },
            {
                "span": attdef(sref("Number"), default_("1")),
            }
        ),

        "tr": element(
            false,
            array(echoice({
                //th is for headers, td for data and for cells acting as both 
                "th": element(
                    true,
                    eref("Flow"),
                    {
                        "attrs": null
                    },
                    {
                        "colspan": attdef(sref("Number"), default_("1")),

                        "headers": attdef(IDREFS(), implied()),
                        "rowspan": attdef(sref("Number"), default_("1")),
                        "scope": attdef(sref("Scope"), implied()),
                    }
                ),
                "td": element(
                    true,
                    eref("Flow"),
                    {
                        "attrs": null
                    },
                    {
                        "colspan": attdef(sref("Number"), default_("1")),
                        "headers": attdef(IDREFS(), implied()),
                        "rowspan": attdef(sref("Number"), default_("1")),
                    }
                ),
            }), true),
            {
                "attrs": null
            },
            {
            }
        ),

        //======================= HTML 5 new elements ===========================













        // "meter": element(
        //     false,
        //     sequence([]),
        //     { "attrs": null },
        //     {
        //         "high": attdef(sref("Number"), implied()),
        //         "low": attdef(sref("Number"), implied()),
        //         "max": attdef(sref("Number"), default_("1")),
        //         "min": attdef(sref("Number"), default_("0")),
        //         "optimum": attdef(sref("Number"), implied()),
        //         "value": attdef(sref("Number"), implied()),
        //     }
        // ),




        "datagrid": element(
            true,
            sequence([]),
            { "attrs": null },
            {}
        ),


        // "details": element(
        //     true,
        //     sequence([]),
        //     {
        //         "attrs": null
        //     },
        //     {
        //         "open": attdef(CDATA(), implied()),
        //     }
        // ),

        // "datatemplate": element(
        //     true,
        //     sequence([]),
        //     { "attrs": null },
        //     {}
        // ),

        // "rule": element(
        //     true,
        //     sequence([]),
        //     { "attrs": null },
        //     {}
        // ),

        // "nest": element(
        //     true,
        //     sequence([]),
        //     { "attrs": null },
        //     {}
        // ),

        // "event-source": element(
        //     true,
        //     sequence([]),
        //     {
        //         "attrs": null
        //     },
        //     {}
        // ),

        "rt": element(
            true,
            echoice({
                "rp": element(
                    true,
                    sequence([]),
                    { "attrs": null },
                    {}
                ),
            }),
            { "attrs": null },
            {}
        ),
        "rp": element(
            true,
            sequence([]),
            { "attrs": null },
            {}
        ),
    }
}