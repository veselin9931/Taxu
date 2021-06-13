import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
let MultiFileUploadComponent = class MultiFileUploadComponent {
    constructor() {
        this.uploader = new FileUploader({});
        this.hasBaseDropZoneOver = false;
    }
    getFiles() {
        return this.uploader.queue.map((fileItem) => {
            return fileItem.file;
        });
    }
    fileOverBase(ev) {
        this.hasBaseDropZoneOver = ev;
    }
    reorderFiles(reorderEvent) {
        let element = this.uploader.queue.splice(reorderEvent.detail.from, 1)[0];
        this.uploader.queue.splice(reorderEvent.detail.to, 0, element);
    }
};
MultiFileUploadComponent = __decorate([
    Component({
        selector: 'app-multi-file-upload',
        templateUrl: './multi-file-upload.component.html',
        styleUrls: ['./multi-file-upload.component.scss']
    })
], MultiFileUploadComponent);
export { MultiFileUploadComponent };
//# sourceMappingURL=multi-file-upload.component.js.map