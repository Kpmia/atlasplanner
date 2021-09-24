import React from "react";
import { LiveSiteUtils } from "../../LiveEvent/utils/LiveSiteUtil";
import uuid from "react-uuid"

export const SessionUtils = {

    getInitialEmailState(orgName, eventName) {
        return {
            "_cache": {
                "html": "<p>Hey there,</p>\n<p>I have invited you to this {event} and created a user profile for you. View your profile link <u>here</u>.</p>\n<p>Sincerely,</p>\n<p>{org-name}</p>"
            },
            "_editorState": {
                "_immutable": {
                    "allowUndo": true,
                    "currentContent": {
                        "entityMap": {},
                        "blockMap": {
                            "98j04": {
                                "key": "98j04",
                                "type": "unstyled",
                                "text": "Hey there,",
                                "characterList": [
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    }
                                ],
                                "depth": 0,
                                "data": {}
                            },
                            "f5cho": {
                                "key": "f5cho",
                                "type": "unstyled",
                                "text": "I have invited you to this {event} and created a user profile for you. View your profile link here.",
                                "characterList": [
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [
                                            "UNDERLINE"
                                        ],
                                        "entity": null
                                    },
                                    {
                                        "style": [
                                            "UNDERLINE"
                                        ],
                                        "entity": null
                                    },
                                    {
                                        "style": [
                                            "UNDERLINE"
                                        ],
                                        "entity": null
                                    },
                                    {
                                        "style": [
                                            "UNDERLINE"
                                        ],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    }
                                ],
                                "depth": 0,
                                "data": {}
                            },
                            "3geai": {
                                "key": "3geai",
                                "type": "unstyled",
                                "text": "Sincerely,",
                                "characterList": [
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    }
                                ],
                                "depth": 0,
                                "data": {}
                            },
                            "8e3al": {
                                "key": "8e3al",
                                "type": "unstyled",
                                "text": "{org-name}",
                                "characterList": [
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    },
                                    {
                                        "style": [],
                                        "entity": null
                                    }
                                ],
                                "depth": 0,
                                "data": {}
                            }
                        },
                        "selectionBefore": {
                            "anchorKey": "1elr9",
                            "anchorOffset": 0,
                            "focusKey": "1elr9",
                            "focusOffset": 0,
                            "isBackward": false,
                            "hasFocus": true
                        },
                        "selectionAfter": {
                            "anchorKey": "f5cho",
                            "anchorOffset": 71,
                            "focusKey": "f5cho",
                            "focusOffset": 71,
                            "isBackward": false,
                            "hasFocus": true
                        }
                    },
                    "decorator": {
                        "_decorators": [
                            {},
                            {}
                        ]
                    },
                    "directionMap": {
                        "98j04": "LTR",
                        "f5cho": "LTR",
                        "3geai": "LTR",
                        "8e3al": "LTR"
                    },
                    "forceSelection": false,
                    "inCompositionMode": false,
                    "inlineStyleOverride": null,
                    "lastChangeType": "backspace-character",
                    "nativelyRenderedContent": null,
                    "redoStack": [],
                    "selection": {
                        "anchorKey": "98j04",
                        "anchorOffset": 10,
                        "focusKey": "98j04",
                        "focusOffset": 10,
                        "isBackward": false,
                        "hasFocus": true
                    },
                    "treeMap": {
                        "98j04": [
                            {
                                "start": 0,
                                "end": 10,
                                "decoratorKey": null,
                                "leaves": [
                                    {
                                        "start": 0,
                                        "end": 10
                                    }
                                ]
                            }
                        ],
                        "f5cho": [
                            {
                                "start": 0,
                                "end": 99,
                                "decoratorKey": null,
                                "leaves": [
                                    {
                                        "start": 0,
                                        "end": 94
                                    },
                                    {
                                        "start": 94,
                                        "end": 98
                                    },
                                    {
                                        "start": 98,
                                        "end": 99
                                    }
                                ]
                            }
                        ],
                        "6s1hb": [
                            {
                                "start": 0,
                                "end": 0,
                                "decoratorKey": null,
                                "leaves": [
                                    {
                                        "start": 0,
                                        "end": 0
                                    }
                                ]
                            }
                        ],
                        "1elr9": [
                            {
                                "start": 0,
                                "end": 28,
                                "decoratorKey": null,
                                "leaves": [
                                    {
                                        "start": 0,
                                        "end": 23
                                    },
                                    {
                                        "start": 23,
                                        "end": 27
                                    },
                                    {
                                        "start": 27,
                                        "end": 28
                                    }
                                ]
                            }
                        ],
                        "3geai": [
                            {
                                "start": 0,
                                "end": 10,
                                "decoratorKey": null,
                                "leaves": [
                                    {
                                        "start": 0,
                                        "end": 10
                                    }
                                ]
                            }
                        ],
                        "8e3al": [
                            {
                                "start": 0,
                                "end": 10,
                                "decoratorKey": null,
                                "leaves": [
                                    {
                                        "start": 0,
                                        "end": 10
                                    }
                                ]
                            }
                        ]
                    },
                    "undoStack": [
                        {
                            "entityMap": {},
                            "blockMap": {
                                "98j04": {
                                    "key": "98j04",
                                    "type": "unstyled",
                                    "text": "Hey there,",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "f5cho": {
                                    "key": "f5cho",
                                    "type": "unstyled",
                                    "text": "I have invited you to this {event} and created a user profile for you. ",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "1elr9": {
                                    "key": "1elr9",
                                    "type": "unstyled",
                                    "text": "View your profile link here.",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "3geai": {
                                    "key": "3geai",
                                    "type": "unstyled",
                                    "text": "Sincerely,",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "8e3al": {
                                    "key": "8e3al",
                                    "type": "unstyled",
                                    "text": "{org-name}",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                }
                            },
                            "selectionBefore": {
                                "anchorKey": "8e3al",
                                "anchorOffset": 0,
                                "focusKey": "8e3al",
                                "focusOffset": 0,
                                "isBackward": false,
                                "hasFocus": true
                            },
                            "selectionAfter": {
                                "anchorKey": "8e3al",
                                "anchorOffset": 10,
                                "focusKey": "8e3al",
                                "focusOffset": 10,
                                "isBackward": false,
                                "hasFocus": true
                            }
                        },
                        {
                            "entityMap": {},
                            "blockMap": {
                                "98j04": {
                                    "key": "98j04",
                                    "type": "unstyled",
                                    "text": "Hey there,",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "f5cho": {
                                    "key": "f5cho",
                                    "type": "unstyled",
                                    "text": "I have invited you to this {event} and created a user profile for you. ",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "1elr9": {
                                    "key": "1elr9",
                                    "type": "unstyled",
                                    "text": "View your profile link here.",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "3geai": {
                                    "key": "3geai",
                                    "type": "unstyled",
                                    "text": "Sincerely,",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "8e3al": {
                                    "key": "8e3al",
                                    "type": "unstyled",
                                    "text": "",
                                    "characterList": [],
                                    "depth": 0,
                                    "data": {}
                                }
                            },
                            "selectionBefore": {
                                "anchorKey": "3geai",
                                "anchorOffset": 10,
                                "focusKey": "3geai",
                                "focusOffset": 10,
                                "isBackward": false,
                                "hasFocus": true
                            },
                            "selectionAfter": {
                                "anchorKey": "8e3al",
                                "anchorOffset": 0,
                                "focusKey": "8e3al",
                                "focusOffset": 0,
                                "isBackward": false,
                                "hasFocus": true
                            }
                        },
                        {
                            "entityMap": {},
                            "blockMap": {
                                "98j04": {
                                    "key": "98j04",
                                    "type": "unstyled",
                                    "text": "Hey there,",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "f5cho": {
                                    "key": "f5cho",
                                    "type": "unstyled",
                                    "text": "I have invited you to this {event} and created a user profile for you. ",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "1elr9": {
                                    "key": "1elr9",
                                    "type": "unstyled",
                                    "text": "View your profile link here.",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "3geai": {
                                    "key": "3geai",
                                    "type": "unstyled",
                                    "text": "Sincerely,",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                }
                            },
                            "selectionBefore": {
                                "anchorKey": "3geai",
                                "anchorOffset": 4,
                                "focusKey": "3geai",
                                "focusOffset": 4,
                                "isBackward": false,
                                "hasFocus": true
                            },
                            "selectionAfter": {
                                "anchorKey": "3geai",
                                "anchorOffset": 10,
                                "focusKey": "3geai",
                                "focusOffset": 10,
                                "isBackward": false,
                                "hasFocus": true
                            }
                        },
                        {
                            "entityMap": {},
                            "blockMap": {
                                "98j04": {
                                    "key": "98j04",
                                    "type": "unstyled",
                                    "text": "Hey there,",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "f5cho": {
                                    "key": "f5cho",
                                    "type": "unstyled",
                                    "text": "I have invited you to this {event} and created a user profile for you. ",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "1elr9": {
                                    "key": "1elr9",
                                    "type": "unstyled",
                                    "text": "View your profile link here.",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "3geai": {
                                    "key": "3geai",
                                    "type": "unstyled",
                                    "text": "Sinc",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                }
                            },
                            "selectionBefore": {
                                "anchorKey": "3geai",
                                "anchorOffset": 5,
                                "focusKey": "3geai",
                                "focusOffset": 5,
                                "isBackward": false,
                                "hasFocus": true
                            },
                            "selectionAfter": {
                                "anchorKey": "3geai",
                                "anchorOffset": 4,
                                "focusKey": "3geai",
                                "focusOffset": 4,
                                "isBackward": false,
                                "hasFocus": true
                            }
                        },
                        {
                            "entityMap": {},
                            "blockMap": {
                                "98j04": {
                                    "key": "98j04",
                                    "type": "unstyled",
                                    "text": "Hey there,",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "f5cho": {
                                    "key": "f5cho",
                                    "type": "unstyled",
                                    "text": "I have invited you to this {event} and created a user profile for you. ",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "1elr9": {
                                    "key": "1elr9",
                                    "type": "unstyled",
                                    "text": "View your profile link here.",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "3geai": {
                                    "key": "3geai",
                                    "type": "unstyled",
                                    "text": "Sincr",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                }
                            },
                            "selectionBefore": {
                                "anchorKey": "f5cho",
                                "anchorOffset": 42,
                                "focusKey": "f5cho",
                                "focusOffset": 42,
                                "isBackward": false,
                                "hasFocus": true
                            },
                            "selectionAfter": {
                                "anchorKey": "f5cho",
                                "anchorOffset": 38,
                                "focusKey": "f5cho",
                                "focusOffset": 38,
                                "isBackward": false,
                                "hasFocus": true
                            }
                        },
                        {
                            "entityMap": {},
                            "blockMap": {
                                "98j04": {
                                    "key": "98j04",
                                    "type": "unstyled",
                                    "text": "Hey there,",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "f5cho": {
                                    "key": "f5cho",
                                    "type": "unstyled",
                                    "text": "I have invited you to this {event} and has created a user profile for you. ",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "1elr9": {
                                    "key": "1elr9",
                                    "type": "unstyled",
                                    "text": "View your profile link here.",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "3geai": {
                                    "key": "3geai",
                                    "type": "unstyled",
                                    "text": "Sincr",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                }
                            },
                            "selectionBefore": {
                                "anchorKey": "f5cho",
                                "anchorOffset": 0,
                                "focusKey": "f5cho",
                                "focusOffset": 0,
                                "isBackward": false,
                                "hasFocus": true
                            },
                            "selectionAfter": {
                                "anchorKey": "f5cho",
                                "anchorOffset": 7,
                                "focusKey": "f5cho",
                                "focusOffset": 7,
                                "isBackward": false,
                                "hasFocus": true
                            }
                        },
                        {
                            "entityMap": {},
                            "blockMap": {
                                "98j04": {
                                    "key": "98j04",
                                    "type": "unstyled",
                                    "text": "Hey there,",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "f5cho": {
                                    "key": "f5cho",
                                    "type": "unstyled",
                                    "text": "invited you to this {event} and has created a user profile for you. ",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "1elr9": {
                                    "key": "1elr9",
                                    "type": "unstyled",
                                    "text": "View your profile link here.",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "3geai": {
                                    "key": "3geai",
                                    "type": "unstyled",
                                    "text": "Sincr",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                }
                            },
                            "selectionBefore": {
                                "anchorKey": "f5cho",
                                "anchorOffset": 15,
                                "focusKey": "f5cho",
                                "focusOffset": 0,
                                "isBackward": true,
                                "hasFocus": true
                            },
                            "selectionAfter": {
                                "anchorKey": "f5cho",
                                "anchorOffset": 0,
                                "focusKey": "f5cho",
                                "focusOffset": 0,
                                "isBackward": false,
                                "hasFocus": true
                            }
                        },
                        {
                            "entityMap": {},
                            "blockMap": {
                                "98j04": {
                                    "key": "98j04",
                                    "type": "unstyled",
                                    "text": "Hey there,",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "f5cho": {
                                    "key": "f5cho",
                                    "type": "unstyled",
                                    "text": "{org-name} has invited you to this {event} and has created a user profile for you. ",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "1elr9": {
                                    "key": "1elr9",
                                    "type": "unstyled",
                                    "text": "View your profile link here.",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "3geai": {
                                    "key": "3geai",
                                    "type": "unstyled",
                                    "text": "Sincr",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                }
                            },
                            "selectionBefore": {
                                "anchorKey": "3geai",
                                "anchorOffset": 0,
                                "focusKey": "3geai",
                                "focusOffset": 0,
                                "isBackward": false,
                                "hasFocus": true
                            },
                            "selectionAfter": {
                                "anchorKey": "3geai",
                                "anchorOffset": 5,
                                "focusKey": "3geai",
                                "focusOffset": 5,
                                "isBackward": false,
                                "hasFocus": true
                            }
                        },
                        {
                            "entityMap": {},
                            "blockMap": {
                                "98j04": {
                                    "key": "98j04",
                                    "type": "unstyled",
                                    "text": "Hey there,",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "f5cho": {
                                    "key": "f5cho",
                                    "type": "unstyled",
                                    "text": "{org-name} has invited you to this {event} and has created a user profile for you. ",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "1elr9": {
                                    "key": "1elr9",
                                    "type": "unstyled",
                                    "text": "View your profile link here.",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "3geai": {
                                    "key": "3geai",
                                    "type": "unstyled",
                                    "text": "",
                                    "characterList": [],
                                    "depth": 0,
                                    "data": {}
                                }
                            },
                            "selectionBefore": {
                                "anchorKey": "3geai",
                                "anchorOffset": 4,
                                "focusKey": "3geai",
                                "focusOffset": 4,
                                "isBackward": false,
                                "hasFocus": true
                            },
                            "selectionAfter": {
                                "anchorKey": "3geai",
                                "anchorOffset": 0,
                                "focusKey": "3geai",
                                "focusOffset": 0,
                                "isBackward": false,
                                "hasFocus": true
                            }
                        },
                        {
                            "entityMap": {},
                            "blockMap": {
                                "98j04": {
                                    "key": "98j04",
                                    "type": "unstyled",
                                    "text": "Hey there,",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "f5cho": {
                                    "key": "f5cho",
                                    "type": "unstyled",
                                    "text": "{org-name} has invited you to this {event} and has created a user profile for you. ",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "1elr9": {
                                    "key": "1elr9",
                                    "type": "unstyled",
                                    "text": "View your profile link here.",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "3geai": {
                                    "key": "3geai",
                                    "type": "unstyled",
                                    "text": "Best",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                }
                            },
                            "selectionBefore": {
                                "anchorKey": "3geai",
                                "anchorOffset": 0,
                                "focusKey": "3geai",
                                "focusOffset": 0,
                                "isBackward": false,
                                "hasFocus": true
                            },
                            "selectionAfter": {
                                "anchorKey": "3geai",
                                "anchorOffset": 4,
                                "focusKey": "3geai",
                                "focusOffset": 4,
                                "isBackward": false,
                                "hasFocus": true
                            }
                        },
                        {
                            "entityMap": {},
                            "blockMap": {
                                "98j04": {
                                    "key": "98j04",
                                    "type": "unstyled",
                                    "text": "Hey there,",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "f5cho": {
                                    "key": "f5cho",
                                    "type": "unstyled",
                                    "text": "{org-name} has invited you to this {event} and has created a user profile for you. ",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "1elr9": {
                                    "key": "1elr9",
                                    "type": "unstyled",
                                    "text": "View your profile link here.",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "3geai": {
                                    "key": "3geai",
                                    "type": "unstyled",
                                    "text": "",
                                    "characterList": [],
                                    "depth": 0,
                                    "data": {}
                                }
                            },
                            "selectionBefore": {
                                "anchorKey": "1elr9",
                                "anchorOffset": 28,
                                "focusKey": "1elr9",
                                "focusOffset": 28,
                                "isBackward": false,
                                "hasFocus": true
                            },
                            "selectionAfter": {
                                "anchorKey": "3geai",
                                "anchorOffset": 0,
                                "focusKey": "3geai",
                                "focusOffset": 0,
                                "isBackward": false,
                                "hasFocus": true
                            }
                        },
                        {
                            "entityMap": {},
                            "blockMap": {
                                "98j04": {
                                    "key": "98j04",
                                    "type": "unstyled",
                                    "text": "Hey there,",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "f5cho": {
                                    "key": "f5cho",
                                    "type": "unstyled",
                                    "text": "{org-name} has invited you to this {event} and has created a user profile for you. ",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "1elr9": {
                                    "key": "1elr9",
                                    "type": "unstyled",
                                    "text": "View your profile link here.",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [
                                                "UNDERLINE"
                                            ],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                }
                            },
                            "selectionBefore": {
                                "anchorKey": "1elr9",
                                "anchorOffset": 27,
                                "focusKey": "1elr9",
                                "focusOffset": 23,
                                "isBackward": true,
                                "hasFocus": true
                            },
                            "selectionAfter": {
                                "anchorKey": "1elr9",
                                "anchorOffset": 27,
                                "focusKey": "1elr9",
                                "focusOffset": 23,
                                "isBackward": true,
                                "hasFocus": true
                            }
                        },
                        {
                            "entityMap": {},
                            "blockMap": {
                                "98j04": {
                                    "key": "98j04",
                                    "type": "unstyled",
                                    "text": "Hey there,",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "f5cho": {
                                    "key": "f5cho",
                                    "type": "unstyled",
                                    "text": "{org-name} has invited you to this {event} and has created a user profile for you. ",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "1elr9": {
                                    "key": "1elr9",
                                    "type": "unstyled",
                                    "text": "View your profile link here.",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                }
                            },
                            "selectionBefore": {
                                "anchorKey": "f5cho",
                                "anchorOffset": 83,
                                "focusKey": "f5cho",
                                "focusOffset": 83,
                                "isBackward": false,
                                "hasFocus": true
                            },
                            "selectionAfter": {
                                "anchorKey": "1elr9",
                                "anchorOffset": 0,
                                "focusKey": "1elr9",
                                "focusOffset": 0,
                                "isBackward": false,
                                "hasFocus": true
                            }
                        },
                        {
                            "entityMap": {},
                            "blockMap": {
                                "98j04": {
                                    "key": "98j04",
                                    "type": "unstyled",
                                    "text": "Hey there,",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "f5cho": {
                                    "key": "f5cho",
                                    "type": "unstyled",
                                    "text": "{org-name} has invited you to this {event} and has created a user profile for you. View your profile link here.",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                }
                            },
                            "selectionBefore": {
                                "anchorKey": "f5cho",
                                "anchorOffset": 59,
                                "focusKey": "f5cho",
                                "focusOffset": 59,
                                "isBackward": false,
                                "hasFocus": true
                            },
                            "selectionAfter": {
                                "anchorKey": "f5cho",
                                "anchorOffset": 60,
                                "focusKey": "f5cho",
                                "focusOffset": 60,
                                "isBackward": false,
                                "hasFocus": true
                            }
                        },
                        {
                            "entityMap": {},
                            "blockMap": {
                                "98j04": {
                                    "key": "98j04",
                                    "type": "unstyled",
                                    "text": "Hey there,",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "f5cho": {
                                    "key": "f5cho",
                                    "type": "unstyled",
                                    "text": "{org-name} has invited you to this {event} and has created  user profile for you. View your profile link here.",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                }
                            },
                            "selectionBefore": {
                                "anchorKey": "f5cho",
                                "anchorOffset": 60,
                                "focusKey": "f5cho",
                                "focusOffset": 60,
                                "isBackward": false,
                                "hasFocus": true
                            },
                            "selectionAfter": {
                                "anchorKey": "f5cho",
                                "anchorOffset": 59,
                                "focusKey": "f5cho",
                                "focusOffset": 59,
                                "isBackward": false,
                                "hasFocus": true
                            }
                        },
                        {
                            "entityMap": {},
                            "blockMap": {
                                "98j04": {
                                    "key": "98j04",
                                    "type": "unstyled",
                                    "text": "Hey there,",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "f5cho": {
                                    "key": "f5cho",
                                    "type": "unstyled",
                                    "text": "{org-name} has invited you to this {event} and has created n user profile for you. View your profile link here.",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                }
                            },
                            "selectionBefore": {
                                "anchorKey": "f5cho",
                                "anchorOffset": 60,
                                "focusKey": "f5cho",
                                "focusOffset": 60,
                                "isBackward": false,
                                "hasFocus": true
                            },
                            "selectionAfter": {
                                "anchorKey": "f5cho",
                                "anchorOffset": 59,
                                "focusKey": "f5cho",
                                "focusOffset": 59,
                                "isBackward": false,
                                "hasFocus": true
                            }
                        },
                        {
                            "entityMap": {},
                            "blockMap": {
                                "98j04": {
                                    "key": "98j04",
                                    "type": "unstyled",
                                    "text": "Hey there,",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "f5cho": {
                                    "key": "f5cho",
                                    "type": "unstyled",
                                    "text": "{org-name} has invited you to this {event} and has created an user profile for you. View your profile link here.",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                }
                            },
                            "selectionBefore": {
                                "anchorKey": "f5cho",
                                "anchorOffset": 92,
                                "focusKey": "f5cho",
                                "focusOffset": 92,
                                "isBackward": false,
                                "hasFocus": true
                            },
                            "selectionAfter": {
                                "anchorKey": "f5cho",
                                "anchorOffset": 112,
                                "focusKey": "f5cho",
                                "focusOffset": 112,
                                "isBackward": false,
                                "hasFocus": true
                            }
                        },
                        {
                            "entityMap": {},
                            "blockMap": {
                                "98j04": {
                                    "key": "98j04",
                                    "type": "unstyled",
                                    "text": "Hey there,",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "f5cho": {
                                    "key": "f5cho",
                                    "type": "unstyled",
                                    "text": "{org-name} has invited you to this {event} and has created an user profile for you. View you",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                }
                            },
                            "selectionBefore": {
                                "anchorKey": "f5cho",
                                "anchorOffset": 95,
                                "focusKey": "f5cho",
                                "focusOffset": 95,
                                "isBackward": false,
                                "hasFocus": true
                            },
                            "selectionAfter": {
                                "anchorKey": "f5cho",
                                "anchorOffset": 92,
                                "focusKey": "f5cho",
                                "focusOffset": 92,
                                "isBackward": false,
                                "hasFocus": true
                            }
                        },
                        {
                            "entityMap": {},
                            "blockMap": {
                                "98j04": {
                                    "key": "98j04",
                                    "type": "unstyled",
                                    "text": "Hey there,",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "f5cho": {
                                    "key": "f5cho",
                                    "type": "unstyled",
                                    "text": "{org-name} has invited you to this {event} and has created an user profile for you. View you pr",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                }
                            },
                            "selectionBefore": {
                                "anchorKey": "f5cho",
                                "anchorOffset": 83,
                                "focusKey": "f5cho",
                                "focusOffset": 83,
                                "isBackward": false,
                                "hasFocus": true
                            },
                            "selectionAfter": {
                                "anchorKey": "f5cho",
                                "anchorOffset": 95,
                                "focusKey": "f5cho",
                                "focusOffset": 95,
                                "isBackward": false,
                                "hasFocus": true
                            }
                        },
                        {
                            "entityMap": {},
                            "blockMap": {
                                "98j04": {
                                    "key": "98j04",
                                    "type": "unstyled",
                                    "text": "Hey there,",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "f5cho": {
                                    "key": "f5cho",
                                    "type": "unstyled",
                                    "text": "{org-name} has invited you to this {event} and has created an user profile for you.",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                }
                            },
                            "selectionBefore": {
                                "anchorKey": "6s1hb",
                                "anchorOffset": 0,
                                "focusKey": "6s1hb",
                                "focusOffset": 0,
                                "isBackward": false,
                                "hasFocus": true
                            },
                            "selectionAfter": {
                                "anchorKey": "f5cho",
                                "anchorOffset": 83,
                                "focusKey": "f5cho",
                                "focusOffset": 83,
                                "isBackward": false,
                                "hasFocus": true
                            }
                        },
                        {
                            "entityMap": {},
                            "blockMap": {
                                "98j04": {
                                    "key": "98j04",
                                    "type": "unstyled",
                                    "text": "Hey there,",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "f5cho": {
                                    "key": "f5cho",
                                    "type": "unstyled",
                                    "text": "{org-name} has invited you to this {event} and has created an user profile for you.",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "6s1hb": {
                                    "key": "6s1hb",
                                    "type": "unstyled",
                                    "text": "",
                                    "characterList": [],
                                    "depth": 0,
                                    "data": {}
                                }
                            },
                            "selectionBefore": {
                                "anchorKey": "f5cho",
                                "anchorOffset": 83,
                                "focusKey": "f5cho",
                                "focusOffset": 83,
                                "isBackward": false,
                                "hasFocus": true
                            },
                            "selectionAfter": {
                                "anchorKey": "6s1hb",
                                "anchorOffset": 0,
                                "focusKey": "6s1hb",
                                "focusOffset": 0,
                                "isBackward": false,
                                "hasFocus": true
                            }
                        },
                        {
                            "entityMap": {},
                            "blockMap": {
                                "98j04": {
                                    "key": "98j04",
                                    "type": "unstyled",
                                    "text": "Hey there,",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "f5cho": {
                                    "key": "f5cho",
                                    "type": "unstyled",
                                    "text": "{org-name} has invited you to this {event} and has created an user profile for you.",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                }
                            },
                            "selectionBefore": {
                                "anchorKey": "f5cho",
                                "anchorOffset": 59,
                                "focusKey": "f5cho",
                                "focusOffset": 59,
                                "isBackward": false,
                                "hasFocus": true
                            },
                            "selectionAfter": {
                                "anchorKey": "f5cho",
                                "anchorOffset": 83,
                                "focusKey": "f5cho",
                                "focusOffset": 83,
                                "isBackward": false,
                                "hasFocus": true
                            }
                        },
                        {
                            "entityMap": {},
                            "blockMap": {
                                "98j04": {
                                    "key": "98j04",
                                    "type": "unstyled",
                                    "text": "Hey there,",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "f5cho": {
                                    "key": "f5cho",
                                    "type": "unstyled",
                                    "text": "{org-name} has invited you to this {event} and has created ",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                }
                            },
                            "selectionBefore": {
                                "anchorKey": "f5cho",
                                "anchorOffset": 66,
                                "focusKey": "f5cho",
                                "focusOffset": 66,
                                "isBackward": false,
                                "hasFocus": true
                            },
                            "selectionAfter": {
                                "anchorKey": "f5cho",
                                "anchorOffset": 59,
                                "focusKey": "f5cho",
                                "focusOffset": 59,
                                "isBackward": false,
                                "hasFocus": true
                            }
                        },
                        {
                            "entityMap": {},
                            "blockMap": {
                                "98j04": {
                                    "key": "98j04",
                                    "type": "unstyled",
                                    "text": "Hey there,",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "f5cho": {
                                    "key": "f5cho",
                                    "type": "unstyled",
                                    "text": "{org-name} has invited you to this {event} and has created a user ",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                }
                            },
                            "selectionBefore": {
                                "anchorKey": "f5cho",
                                "anchorOffset": 43,
                                "focusKey": "f5cho",
                                "focusOffset": 43,
                                "isBackward": false,
                                "hasFocus": true
                            },
                            "selectionAfter": {
                                "anchorKey": "f5cho",
                                "anchorOffset": 66,
                                "focusKey": "f5cho",
                                "focusOffset": 66,
                                "isBackward": false,
                                "hasFocus": true
                            }
                        },
                        {
                            "entityMap": {},
                            "blockMap": {
                                "98j04": {
                                    "key": "98j04",
                                    "type": "unstyled",
                                    "text": "Hey there,",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "f5cho": {
                                    "key": "f5cho",
                                    "type": "unstyled",
                                    "text": "{org-name} has invited you to this {event} ",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                }
                            },
                            "selectionBefore": {
                                "anchorKey": "f5cho",
                                "anchorOffset": 69,
                                "focusKey": "f5cho",
                                "focusOffset": 43,
                                "isBackward": true,
                                "hasFocus": true
                            },
                            "selectionAfter": {
                                "anchorKey": "f5cho",
                                "anchorOffset": 43,
                                "focusKey": "f5cho",
                                "focusOffset": 43,
                                "isBackward": false,
                                "hasFocus": true
                            }
                        },
                        {
                            "entityMap": {},
                            "blockMap": {
                                "98j04": {
                                    "key": "98j04",
                                    "type": "unstyled",
                                    "text": "Hey there,",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "f5cho": {
                                    "key": "f5cho",
                                    "type": "unstyled",
                                    "text": "{org-name} has invited you to this {event} to create a user profile. ",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                }
                            },
                            "selectionBefore": {
                                "anchorKey": "f5cho",
                                "anchorOffset": 0,
                                "focusKey": "f5cho",
                                "focusOffset": 0,
                                "isBackward": false,
                                "hasFocus": true
                            },
                            "selectionAfter": {
                                "anchorKey": "f5cho",
                                "anchorOffset": 69,
                                "focusKey": "f5cho",
                                "focusOffset": 69,
                                "isBackward": false,
                                "hasFocus": true
                            }
                        },
                        {
                            "entityMap": {},
                            "blockMap": {
                                "98j04": {
                                    "key": "98j04",
                                    "type": "unstyled",
                                    "text": "Hey there,",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                },
                                "f5cho": {
                                    "key": "f5cho",
                                    "type": "unstyled",
                                    "text": "",
                                    "characterList": [],
                                    "depth": 0,
                                    "data": {}
                                }
                            },
                            "selectionBefore": {
                                "anchorKey": "98j04",
                                "anchorOffset": 10,
                                "focusKey": "98j04",
                                "focusOffset": 10,
                                "isBackward": false,
                                "hasFocus": true
                            },
                            "selectionAfter": {
                                "anchorKey": "f5cho",
                                "anchorOffset": 0,
                                "focusKey": "f5cho",
                                "focusOffset": 0,
                                "isBackward": false,
                                "hasFocus": true
                            }
                        },
                        {
                            "entityMap": {},
                            "blockMap": {
                                "98j04": {
                                    "key": "98j04",
                                    "type": "unstyled",
                                    "text": "Hey there,",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                }
                            },
                            "selectionBefore": {
                                "anchorKey": "98j04",
                                "anchorOffset": 1,
                                "focusKey": "98j04",
                                "focusOffset": 1,
                                "isBackward": false,
                                "hasFocus": true
                            },
                            "selectionAfter": {
                                "anchorKey": "98j04",
                                "anchorOffset": 10,
                                "focusKey": "98j04",
                                "focusOffset": 10,
                                "isBackward": false,
                                "hasFocus": true
                            }
                        },
                        {
                            "entityMap": {},
                            "blockMap": {
                                "98j04": {
                                    "key": "98j04",
                                    "type": "unstyled",
                                    "text": "H",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                }
                            },
                            "selectionBefore": {
                                "anchorKey": "98j04",
                                "anchorOffset": 7,
                                "focusKey": "98j04",
                                "focusOffset": 7,
                                "isBackward": false,
                                "hasFocus": true
                            },
                            "selectionAfter": {
                                "anchorKey": "98j04",
                                "anchorOffset": 1,
                                "focusKey": "98j04",
                                "focusOffset": 1,
                                "isBackward": false,
                                "hasFocus": true
                            }
                        },
                        {
                            "entityMap": {},
                            "blockMap": {
                                "98j04": {
                                    "key": "98j04",
                                    "type": "unstyled",
                                    "text": "Hye the",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                }
                            },
                            "selectionBefore": {
                                "anchorKey": "98j04",
                                "anchorOffset": 0,
                                "focusKey": "98j04",
                                "focusOffset": 0,
                                "isBackward": false,
                                "hasFocus": true
                            },
                            "selectionAfter": {
                                "anchorKey": "98j04",
                                "anchorOffset": 7,
                                "focusKey": "98j04",
                                "focusOffset": 7,
                                "isBackward": false,
                                "hasFocus": true
                            }
                        },
                        {
                            "entityMap": {},
                            "blockMap": {
                                "98j04": {
                                    "key": "98j04",
                                    "type": "unstyled",
                                    "text": "",
                                    "characterList": [],
                                    "depth": 0,
                                    "data": {}
                                }
                            },
                            "selectionBefore": {
                                "anchorKey": "98j04",
                                "anchorOffset": 24,
                                "focusKey": "98j04",
                                "focusOffset": 24,
                                "isBackward": false,
                                "hasFocus": true
                            },
                            "selectionAfter": {
                                "anchorKey": "98j04",
                                "anchorOffset": 0,
                                "focusKey": "98j04",
                                "focusOffset": 0,
                                "isBackward": false,
                                "hasFocus": true
                            }
                        },
                        {
                            "entityMap": {},
                            "blockMap": {
                                "98j04": {
                                    "key": "98j04",
                                    "type": "unstyled",
                                    "text": "sadasdasdasdasdsadasdasd",
                                    "characterList": [
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        },
                                        {
                                            "style": [],
                                            "entity": null
                                        }
                                    ],
                                    "depth": 0,
                                    "data": {}
                                }
                            },
                            "selectionBefore": {
                                "anchorKey": "98j04",
                                "anchorOffset": 0,
                                "focusKey": "98j04",
                                "focusOffset": 0,
                                "isBackward": false,
                                "hasFocus": true
                            },
                            "selectionAfter": {
                                "anchorKey": "98j04",
                                "anchorOffset": 24,
                                "focusKey": "98j04",
                                "focusOffset": 24,
                                "isBackward": false,
                                "hasFocus": true
                            }
                        },
                        {
                            "entityMap": {},
                            "blockMap": {
                                "98j04": {
                                    "key": "98j04",
                                    "type": "unstyled",
                                    "text": "",
                                    "characterList": [],
                                    "depth": 0,
                                    "data": {}
                                }
                            },
                            "selectionBefore": {
                                "anchorKey": "98j04",
                                "anchorOffset": 0,
                                "focusKey": "98j04",
                                "focusOffset": 0,
                                "isBackward": false,
                                "hasFocus": false
                            },
                            "selectionAfter": {
                                "anchorKey": "98j04",
                                "anchorOffset": 0,
                                "focusKey": "98j04",
                                "focusOffset": 0,
                                "isBackward": false,
                                "hasFocus": false
                            }
                        }
                    ]
                }
            }
        }

    },

    /**
     * This helper method takes in an object array that is in the format [{start: ISODateString, end: ISODateString}]
     * This is to reformat the timeslot data structure to add more attributes including:
     * - _id: string generated by uuid()
     * - day: integer of the day of the week
     * - start: string of the time of the start date
     * - end: string of of the time of the end date
     * - filled: empty object for reservees
     * - actual_start: date object of the start timeslot
     * - actual_end: date object of the end timeslot
     * @param {Array} timeslots - object array in the format [{start: ISODateString, end: ISODateString}]
     * Returns an object array of the timeslots with the added attributes
     */
    reformatTimeslots(timeslots) {
        const restructureDates = []

        timeslots.map((timeslot) => {
            restructureDates.push({
                "day": timeslot["start"].getDay(),
                "_id": uuid().toString(),
                "actual_start": timeslot["start"],
                "actual_end": timeslot["end"],
                "start": timeslot["start"].toTimeString(),
                "end": timeslot["end"].toTimeString(),
                "filled": {}
            })
        })

        return restructureDates;
    },

    /**
     * 
     */
    getInstruction(step) {
        if (step == 1) {
            return {title: "Create session",
                message: "Fill out the form with your basic information. A name is required."}
        }
        if (step == 2) {
            return {"title": "Schedule",
                    "message": "Select timeslots that you're available on. Drag the end of each timeslot downward or upward with your mouse. "}
        }
        if (step == 3) {
            return {"title": "Finished!",
            "message": ""}
        }
    },

    /**
     * Get a gradient color
     */
    getGradColors() {
        return [
            "linear-gradient(-45deg, #ff1ea5, #ff8b8b, #4742c0, #9da1ff)",
            "linear-gradient(136.53deg, #B779E8 3.42%, #706DFF 48.12%, #65FFDA 101.51%)",
            "linear-gradient(136.53deg, #6DFFF6 3.42%, #30BBF6 50.93%, #BBFF65 101.51%)",
            "linear-gradient(136.53deg, #FE9C66 3.42%, #FF6D6D 48.12%, #FCFF65 101.51%)",
            "linear-gradient(136.53deg, #F6CA30 3.42%, #FFA26D 48.12%, #BCFF66 101.51%)",
            "linear-gradient(136.53deg, #77FFAD 3.42%, #2CA5CB 48.12%, #66EDFF 101.51%)",
            "linear-gradient(136.53deg, #FD94FF 3.42%, #BA3DE6 51.51%, #FFF966 101.51%)",
            "linear-gradient(136.53deg, #D694FF 3.42%, #3D4EE6 51.51%, #66F6FF 101.51%)",
            "linear-gradient(136.53deg, #FFBA94 3.42%, #3D6CE6 51.51%, #FC66FF 101.51%)",
            "linear-gradient(136.53deg, #FF9A94 3.42%, #E63D8E 51.51%, #FFDAC6 101.51%)",
            "linear-gradient(136.53deg, #94A5FF 3.42%, #E63D8E 67.57%, #FFDAC6 101.51%)",
            "linear-gradient(136.53deg, #94F9FF 3.42%, #3D6CE6 55.25%, #D8C6FF 101.51%)"
        ]
    }

}