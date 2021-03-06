"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Model class for Dialogflow quick replies
*/
class DFQuickRepliesInput {
    constructor(quickReplies, platform, title = null, value = '', placeholder = '', type = '', error = []) {
        this.quickReplies = [];
        this.error = [];
        if (quickReplies === undefined) {
            throw new Error('title string required by Card constructor');
        }
        if (Array.isArray(quickReplies)) {
            this.quickReplies = quickReplies;
            this.platform = platform;
        }
        else {
            throw new Error('card button requires both title and link');
        }
        if (title && (typeof title == 'object')) {
            this.title = title.Answer;
        }
        else {
            this.title = title;
        }
        this.value = value;
        this.placeholder = placeholder;
        this.type = type;
        this.error = error;
    }
    /**
 * return JSON data from class object
*/
    getJSON() {
        return {
            quickReplies: {
                quickReplies: this.quickReplies
            },
            platform: this.platform
        };
    }
}
exports.default = DFQuickRepliesInput;
//# sourceMappingURL=df-quickrepliesinput.js.map