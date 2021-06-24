(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["become-driver-become-driver-module"], {
    /***/
    "46YJ":
    /*!*******************************************************!*\
      !*** ./src/app/become-driver/become-driver.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function YJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --ion-background-color:#e9e9e9;\n}\n\nion-toolbar {\n  --ion-background-color:#eeeeee;\n}\n\nion-title {\n  text-align: center;\n}\n\n.file-input-container {\n  text-align: right;\n}\n\ninput[type=file] {\n  display: none;\n}\n\nlabel {\n  border: 1px solid #ccc;\n  padding: 8px 15px;\n  cursor: pointer;\n}\n\n.nv-file-over {\n  border: dotted 3px red;\n}\n\n.text {\n  font-family: Open Sans Light;\n}\n\n#toolbarIcon {\n  font-size: 1.7em;\n}\n\nspan {\n  color: white;\n}\n\n.centered {\n  text-align: center;\n}\n\nhr {\n  background: #eeeeee;\n  width: 70% !important;\n}\n\n.backIcon {\n  color: #ffae00;\n  font-size: 150%;\n}\n\n.back {\n  color: #ffae00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJlY29tZS1kcml2ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksOEJBQUE7QUFBSjs7QUFJQTtFQUNJLDhCQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksaUJBQUE7QUFESjs7QUFLQTtFQUNJLGFBQUE7QUFGSjs7QUFLQTtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBRko7O0FBSUE7RUFDSSxzQkFBQTtBQURKOztBQUtBO0VBQ0ksNEJBQUE7QUFGSjs7QUFLQTtFQUNJLGdCQUFBO0FBRko7O0FBS0E7RUFDSSxZQUFBO0FBRko7O0FBTUE7RUFDSSxrQkFBQTtBQUhKOztBQU1BO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtBQUhKOztBQU9BO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFKSjs7QUFPQTtFQUNJLGNBQUE7QUFKSiIsImZpbGUiOiJiZWNvbWUtZHJpdmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLy8tLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvd3A0NzkyNzgwLWRhcmstcGhvbmUtd2FsbHBhcGVycy5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZTllOWU5O1xyXG5cclxufVxyXG5cclxuaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNlZWVlZWU7XHJcbn1cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5maWxlLWlucHV0LWNvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuXHJcbiAgICBcclxufVxyXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgcGFkZGluZzogOHB4IDE1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm52LWZpbGUtb3ZlciB7XHJcbiAgICBib3JkZXI6IGRvdHRlZCAzcHggcmVkO1xyXG59XHJcblxyXG5cclxuLnRleHR7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIExpZ2h0O1xyXG59XHJcblxyXG4jdG9vbGJhckljb257XHJcbiAgICBmb250LXNpemU6IDEuN2VtO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi5jZW50ZXJlZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaHJ7XHJcbiAgICBiYWNrZ3JvdW5kOiNlZWVlZWU7XHJcbiAgICB3aWR0aDogNzAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uYmFja0ljb24ge1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDE3NCwgMCk7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbn1cclxuXHJcbi5iYWNrIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAxNzQsIDApO1xyXG59Il19 */";
      /***/
    },

    /***/
    "7pIB":
    /*!*******************************************************************************!*\
      !*** ./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js ***!
      \*******************************************************************************/

    /*! exports provided: FileDropDirective, FileItem, FileLikeObject, FileSelectDirective, FileUploadModule, FileUploader */

    /***/
    function pIB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileDropDirective", function () {
        return FileDropDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileItem", function () {
        return FileItem;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileLikeObject", function () {
        return FileLikeObject;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileSelectDirective", function () {
        return FileSelectDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileUploadModule", function () {
        return FileUploadModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileUploader", function () {
        return FileUploader;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} node
       * @return {?}
       */


      function isElement(node) {
        return !!(node && (node.nodeName || node.prop && node.attr && node.find));
      }

      var FileLikeObject = /*#__PURE__*/function () {
        /**
         * @param {?} fileOrInput
         */
        function FileLikeObject(fileOrInput) {
          _classCallCheck(this, FileLikeObject);

          this.rawFile = fileOrInput;
          /** @type {?} */

          var isInput = isElement(fileOrInput);
          /** @type {?} */

          var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
          /** @type {?} */

          var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
          /** @type {?} */

          var method = '_createFrom' + postfix;

          /** @type {?} */
          this[method](fakePathOrObject);
        }
        /**
         * @param {?} path
         * @return {?}
         */


        _createClass(FileLikeObject, [{
          key: "_createFromFakePath",
          value: function _createFromFakePath(path) {
            this.lastModifiedDate = void 0;
            this.size = void 0;
            this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
            this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
          }
          /**
           * @param {?} object
           * @return {?}
           */

        }, {
          key: "_createFromObject",
          value: function _createFromObject(object) {
            this.size = object.size;
            this.type = object.type;
            this.name = object.name;
          }
        }]);

        return FileLikeObject;
      }();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var FileItem = /*#__PURE__*/function () {
        /**
         * @param {?} uploader
         * @param {?} some
         * @param {?} options
         */
        function FileItem(uploader, some, options) {
          _classCallCheck(this, FileItem);

          this.url = '/';
          this.headers = [];
          this.withCredentials = true;
          this.formData = [];
          this.isReady = false;
          this.isUploading = false;
          this.isUploaded = false;
          this.isSuccess = false;
          this.isCancel = false;
          this.isError = false;
          this.progress = 0;
          this.index = void 0;
          this.uploader = uploader;
          this.some = some;
          this.options = options;
          this.file = new FileLikeObject(some);
          this._file = some;

          if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
          }

          this.url = uploader.options.url;
        }
        /**
         * @return {?}
         */


        _createClass(FileItem, [{
          key: "upload",
          value: function upload() {
            try {
              this.uploader.uploadItem(this);
            } catch (e) {
              this.uploader._onCompleteItem(this, '', 0, {});

              this.uploader._onErrorItem(this, '', 0, {});
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "cancel",
          value: function cancel() {
            this.uploader.cancelItem(this);
          }
          /**
           * @return {?}
           */

        }, {
          key: "remove",
          value: function remove() {
            this.uploader.removeFromQueue(this);
          }
          /**
           * @return {?}
           */

        }, {
          key: "onBeforeUpload",
          value: function onBeforeUpload() {
            return void 0;
          }
          /**
           * @param {?} form
           * @return {?}
           */

        }, {
          key: "onBuildForm",
          value: function onBuildForm(form) {
            return {
              form: form
            };
          }
          /**
           * @param {?} progress
           * @return {?}
           */

        }, {
          key: "onProgress",
          value: function onProgress(progress) {
            return {
              progress: progress
            };
          }
          /**
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "onSuccess",
          value: function onSuccess(response, status, headers) {
            return {
              response: response,
              status: status,
              headers: headers
            };
          }
          /**
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "onError",
          value: function onError(response, status, headers) {
            return {
              response: response,
              status: status,
              headers: headers
            };
          }
          /**
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "onCancel",
          value: function onCancel(response, status, headers) {
            return {
              response: response,
              status: status,
              headers: headers
            };
          }
          /**
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "onComplete",
          value: function onComplete(response, status, headers) {
            return {
              response: response,
              status: status,
              headers: headers
            };
          }
          /**
           * @return {?}
           */

        }, {
          key: "_onBeforeUpload",
          value: function _onBeforeUpload() {
            this.isReady = true;
            this.isUploading = true;
            this.isUploaded = false;
            this.isSuccess = false;
            this.isCancel = false;
            this.isError = false;
            this.progress = 0;
            this.onBeforeUpload();
          }
          /**
           * @param {?} form
           * @return {?}
           */

        }, {
          key: "_onBuildForm",
          value: function _onBuildForm(form) {
            this.onBuildForm(form);
          }
          /**
           * @param {?} progress
           * @return {?}
           */

        }, {
          key: "_onProgress",
          value: function _onProgress(progress) {
            this.progress = progress;
            this.onProgress(progress);
          }
          /**
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "_onSuccess",
          value: function _onSuccess(response, status, headers) {
            this.isReady = false;
            this.isUploading = false;
            this.isUploaded = true;
            this.isSuccess = true;
            this.isCancel = false;
            this.isError = false;
            this.progress = 100;
            this.index = void 0;
            this.onSuccess(response, status, headers);
          }
          /**
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "_onError",
          value: function _onError(response, status, headers) {
            this.isReady = false;
            this.isUploading = false;
            this.isUploaded = true;
            this.isSuccess = false;
            this.isCancel = false;
            this.isError = true;
            this.progress = 0;
            this.index = void 0;
            this.onError(response, status, headers);
          }
          /**
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "_onCancel",
          value: function _onCancel(response, status, headers) {
            this.isReady = false;
            this.isUploading = false;
            this.isUploaded = false;
            this.isSuccess = false;
            this.isCancel = true;
            this.isError = false;
            this.progress = 0;
            this.index = void 0;
            this.onCancel(response, status, headers);
          }
          /**
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "_onComplete",
          value: function _onComplete(response, status, headers) {
            this.onComplete(response, status, headers);

            if (this.uploader.options.removeAfterUpload) {
              this.remove();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "_prepareToUploading",
          value: function _prepareToUploading() {
            this.index = this.index || ++this.uploader._nextIndex;
            this.isReady = true;
          }
        }]);

        return FileItem;
      }();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var FileType = /*#__PURE__*/function () {
        function FileType() {
          _classCallCheck(this, FileType);
        }

        _createClass(FileType, null, [{
          key: "getMimeClass",
          value:
          /**
           * @param {?} file
           * @return {?}
           */
          function getMimeClass(file) {
            /** @type {?} */
            var mimeClass = 'application';

            if (this.mime_psd.indexOf(file.type) !== -1) {
              mimeClass = 'image';
            } else if (file.type.match('image.*')) {
              mimeClass = 'image';
            } else if (file.type.match('video.*')) {
              mimeClass = 'video';
            } else if (file.type.match('audio.*')) {
              mimeClass = 'audio';
            } else if (file.type === 'application/pdf') {
              mimeClass = 'pdf';
            } else if (this.mime_compress.indexOf(file.type) !== -1) {
              mimeClass = 'compress';
            } else if (this.mime_doc.indexOf(file.type) !== -1) {
              mimeClass = 'doc';
            } else if (this.mime_xsl.indexOf(file.type) !== -1) {
              mimeClass = 'xls';
            } else if (this.mime_ppt.indexOf(file.type) !== -1) {
              mimeClass = 'ppt';
            }

            if (mimeClass === 'application') {
              mimeClass = this.fileTypeDetection(file.name);
            }

            return mimeClass;
          }
          /**
           * @param {?} inputFilename
           * @return {?}
           */

        }, {
          key: "fileTypeDetection",
          value: function fileTypeDetection(inputFilename) {
            /** @type {?} */
            var types = {
              'jpg': 'image',
              'jpeg': 'image',
              'tif': 'image',
              'psd': 'image',
              'bmp': 'image',
              'png': 'image',
              'nef': 'image',
              'tiff': 'image',
              'cr2': 'image',
              'dwg': 'image',
              'cdr': 'image',
              'ai': 'image',
              'indd': 'image',
              'pin': 'image',
              'cdp': 'image',
              'skp': 'image',
              'stp': 'image',
              '3dm': 'image',
              'mp3': 'audio',
              'wav': 'audio',
              'wma': 'audio',
              'mod': 'audio',
              'm4a': 'audio',
              'compress': 'compress',
              'zip': 'compress',
              'rar': 'compress',
              '7z': 'compress',
              'lz': 'compress',
              'z01': 'compress',
              'bz2': 'compress',
              'gz': 'compress',
              'pdf': 'pdf',
              'xls': 'xls',
              'xlsx': 'xls',
              'ods': 'xls',
              'mp4': 'video',
              'avi': 'video',
              'wmv': 'video',
              'mpg': 'video',
              'mts': 'video',
              'flv': 'video',
              '3gp': 'video',
              'vob': 'video',
              'm4v': 'video',
              'mpeg': 'video',
              'm2ts': 'video',
              'mov': 'video',
              'doc': 'doc',
              'docx': 'doc',
              'eps': 'doc',
              'txt': 'doc',
              'odt': 'doc',
              'rtf': 'doc',
              'ppt': 'ppt',
              'pptx': 'ppt',
              'pps': 'ppt',
              'ppsx': 'ppt',
              'odp': 'ppt'
            };
            /** @type {?} */

            var chunks = inputFilename.split('.');

            if (chunks.length < 2) {
              return 'application';
            }
            /** @type {?} */


            var extension = chunks[chunks.length - 1].toLowerCase();

            if (types[extension] === undefined) {
              return 'application';
            } else {
              return types[extension];
            }
          }
        }]);

        return FileType;
      }();
      /*  MS office  */


      FileType.mime_doc = ['application/msword', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.openxmlformats-officedocument.wordprocessingml.template', 'application/vnd.ms-word.document.macroEnabled.12', 'application/vnd.ms-word.template.macroEnabled.12'];
      FileType.mime_xsl = ['application/vnd.ms-excel', 'application/vnd.ms-excel', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.spreadsheetml.template', 'application/vnd.ms-excel.sheet.macroEnabled.12', 'application/vnd.ms-excel.template.macroEnabled.12', 'application/vnd.ms-excel.addin.macroEnabled.12', 'application/vnd.ms-excel.sheet.binary.macroEnabled.12'];
      FileType.mime_ppt = ['application/vnd.ms-powerpoint', 'application/vnd.ms-powerpoint', 'application/vnd.ms-powerpoint', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.presentationml.template', 'application/vnd.openxmlformats-officedocument.presentationml.slideshow', 'application/vnd.ms-powerpoint.addin.macroEnabled.12', 'application/vnd.ms-powerpoint.presentation.macroEnabled.12', 'application/vnd.ms-powerpoint.presentation.macroEnabled.12', 'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'];
      /* PSD */

      FileType.mime_psd = ['image/photoshop', 'image/x-photoshop', 'image/psd', 'application/photoshop', 'application/psd', 'zz-application/zz-winassoc-psd'];
      /* Compressed files */

      FileType.mime_compress = ['application/x-gtar', 'application/x-gcompress', 'application/compress', 'application/x-tar', 'application/x-rar-compressed', 'application/octet-stream', 'application/x-zip-compressed', 'application/zip-compressed', 'application/x-7z-compressed', 'application/gzip', 'application/x-bzip2'];

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} value
       * @return {?}
       */


      function _isFile(value) {
        return File && value instanceof File;
      }
      /**
       * @record
       */


      function Headers() {}

      if (false) {}
      /**
       * @record
       */


      function FileUploaderOptions() {}

      if (false) {}

      var FileUploader = /*#__PURE__*/function () {
        /**
         * @param {?} options
         */
        function FileUploader(options) {
          _classCallCheck(this, FileUploader);

          this.isUploading = false;
          this.queue = [];
          this.progress = 0;
          this._nextIndex = 0;
          this.options = {
            autoUpload: false,
            isHTML5: true,
            filters: [],
            removeAfterUpload: false,
            disableMultipart: false,
            formatDataFunction:
            /**
            * @param {?} item
            * @return {?}
            */
            function formatDataFunction(item) {
              return item._file;
            },
            formatDataFunctionIsAsync: false
          };
          this.setOptions(options);
          this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }
        /**
         * @param {?} options
         * @return {?}
         */


        _createClass(FileUploader, [{
          key: "setOptions",
          value: function setOptions(options) {
            this.options = Object.assign(this.options, options);
            this.authToken = this.options.authToken;
            this.authTokenHeader = this.options.authTokenHeader || 'Authorization';
            this.autoUpload = this.options.autoUpload;
            this.options.filters.unshift({
              name: 'queueLimit',
              fn: this._queueLimitFilter
            });

            if (this.options.maxFileSize) {
              this.options.filters.unshift({
                name: 'fileSize',
                fn: this._fileSizeFilter
              });
            }

            if (this.options.allowedFileType) {
              this.options.filters.unshift({
                name: 'fileType',
                fn: this._fileTypeFilter
              });
            }

            if (this.options.allowedMimeType) {
              this.options.filters.unshift({
                name: 'mimeType',
                fn: this._mimeTypeFilter
              });
            }

            for (var i = 0; i < this.queue.length; i++) {
              this.queue[i].url = this.options.url;
            }
          }
          /**
           * @param {?} files
           * @param {?=} options
           * @param {?=} filters
           * @return {?}
           */

        }, {
          key: "addToQueue",
          value: function addToQueue(files, options, filters) {
            var _this = this;

            /** @type {?} */
            var list = [];

            var _iterator = _createForOfIteratorHelper(files),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var file = _step.value;
                list.push(file);
              }
              /** @type {?} */

            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            var arrayOfFilters = this._getFilters(filters);
            /** @type {?} */


            var count = this.queue.length;
            /** @type {?} */

            var addedFileItems = [];
            list.map(
            /**
            * @param {?} some
            * @return {?}
            */
            function (some) {
              if (!options) {
                options = _this.options;
              }
              /** @type {?} */


              var temp = new FileLikeObject(some);

              if (_this._isValidFile(temp, arrayOfFilters, options)) {
                /** @type {?} */
                var fileItem = new FileItem(_this, some, options);
                addedFileItems.push(fileItem);

                _this.queue.push(fileItem);

                _this._onAfterAddingFile(fileItem);
              } else {
                /** @type {?} */
                var filter = arrayOfFilters[_this._failFilterIndex];

                _this._onWhenAddingFileFailed(temp, filter, options);
              }
            });

            if (this.queue.length !== count) {
              this._onAfterAddingAll(addedFileItems);

              this.progress = this._getTotalProgress();
            }

            this._render();

            if (this.options.autoUpload) {
              this.uploadAll();
            }
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "removeFromQueue",
          value: function removeFromQueue(value) {
            /** @type {?} */
            var index = this.getIndexOfItem(value);
            /** @type {?} */

            var item = this.queue[index];

            if (item.isUploading) {
              item.cancel();
            }

            this.queue.splice(index, 1);
            this.progress = this._getTotalProgress();
          }
          /**
           * @return {?}
           */

        }, {
          key: "clearQueue",
          value: function clearQueue() {
            while (this.queue.length) {
              this.queue[0].remove();
            }

            this.progress = 0;
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "uploadItem",
          value: function uploadItem(value) {
            /** @type {?} */
            var index = this.getIndexOfItem(value);
            /** @type {?} */

            var item = this.queue[index];
            /** @type {?} */

            var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';

            item._prepareToUploading();

            if (this.isUploading) {
              return;
            }

            this.isUploading = true;

            /** @type {?} */
            this[transport](item);
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "cancelItem",
          value: function cancelItem(value) {
            /** @type {?} */
            var index = this.getIndexOfItem(value);
            /** @type {?} */

            var item = this.queue[index];
            /** @type {?} */

            var prop = this.options.isHTML5 ? item._xhr : item._form;

            if (item && item.isUploading) {
              prop.abort();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "uploadAll",
          value: function uploadAll() {
            /** @type {?} */
            var items = this.getNotUploadedItems().filter(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return !item.isUploading;
            });

            if (!items.length) {
              return;
            }

            items.map(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return item._prepareToUploading();
            });
            items[0].upload();
          }
          /**
           * @return {?}
           */

        }, {
          key: "cancelAll",
          value: function cancelAll() {
            /** @type {?} */
            var items = this.getNotUploadedItems();
            items.map(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return item.cancel();
            });
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "isFile",
          value: function isFile(value) {
            return _isFile(value);
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "isFileLikeObject",
          value: function isFileLikeObject(value) {
            return value instanceof FileLikeObject;
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "getIndexOfItem",
          value: function getIndexOfItem(value) {
            return typeof value === 'number' ? value : this.queue.indexOf(value);
          }
          /**
           * @return {?}
           */

        }, {
          key: "getNotUploadedItems",
          value: function getNotUploadedItems() {
            return this.queue.filter(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return !item.isUploaded;
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "getReadyItems",
          value: function getReadyItems() {
            return this.queue.filter(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return item.isReady && !item.isUploading;
            }).sort(
            /**
            * @param {?} item1
            * @param {?} item2
            * @return {?}
            */
            function (item1, item2) {
              return item1.index - item2.index;
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "destroy",
          value: function destroy() {
            return void 0;
          }
          /**
           * @param {?} fileItems
           * @return {?}
           */

        }, {
          key: "onAfterAddingAll",
          value: function onAfterAddingAll(fileItems) {
            return {
              fileItems: fileItems
            };
          }
          /**
           * @param {?} fileItem
           * @param {?} form
           * @return {?}
           */

        }, {
          key: "onBuildItemForm",
          value: function onBuildItemForm(fileItem, form) {
            return {
              fileItem: fileItem,
              form: form
            };
          }
          /**
           * @param {?} fileItem
           * @return {?}
           */

        }, {
          key: "onAfterAddingFile",
          value: function onAfterAddingFile(fileItem) {
            return {
              fileItem: fileItem
            };
          }
          /**
           * @param {?} item
           * @param {?} filter
           * @param {?} options
           * @return {?}
           */

        }, {
          key: "onWhenAddingFileFailed",
          value: function onWhenAddingFileFailed(item, filter, options) {
            return {
              item: item,
              filter: filter,
              options: options
            };
          }
          /**
           * @param {?} fileItem
           * @return {?}
           */

        }, {
          key: "onBeforeUploadItem",
          value: function onBeforeUploadItem(fileItem) {
            return {
              fileItem: fileItem
            };
          }
          /**
           * @param {?} fileItem
           * @param {?} progress
           * @return {?}
           */

        }, {
          key: "onProgressItem",
          value: function onProgressItem(fileItem, progress) {
            return {
              fileItem: fileItem,
              progress: progress
            };
          }
          /**
           * @param {?} progress
           * @return {?}
           */

        }, {
          key: "onProgressAll",
          value: function onProgressAll(progress) {
            return {
              progress: progress
            };
          }
          /**
           * @param {?} item
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "onSuccessItem",
          value: function onSuccessItem(item, response, status, headers) {
            return {
              item: item,
              response: response,
              status: status,
              headers: headers
            };
          }
          /**
           * @param {?} item
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "onErrorItem",
          value: function onErrorItem(item, response, status, headers) {
            return {
              item: item,
              response: response,
              status: status,
              headers: headers
            };
          }
          /**
           * @param {?} item
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "onCancelItem",
          value: function onCancelItem(item, response, status, headers) {
            return {
              item: item,
              response: response,
              status: status,
              headers: headers
            };
          }
          /**
           * @param {?} item
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "onCompleteItem",
          value: function onCompleteItem(item, response, status, headers) {
            return {
              item: item,
              response: response,
              status: status,
              headers: headers
            };
          }
          /**
           * @return {?}
           */

        }, {
          key: "onCompleteAll",
          value: function onCompleteAll() {
            return void 0;
          }
          /**
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "_mimeTypeFilter",
          value: function _mimeTypeFilter(item) {
            return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
          }
          /**
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "_fileSizeFilter",
          value: function _fileSizeFilter(item) {
            return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
          }
          /**
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "_fileTypeFilter",
          value: function _fileTypeFilter(item) {
            return !(this.options.allowedFileType && this.options.allowedFileType.indexOf(FileType.getMimeClass(item)) === -1);
          }
          /**
           * @param {?} item
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "_onErrorItem",
          value: function _onErrorItem(item, response, status, headers) {
            item._onError(response, status, headers);

            this.onErrorItem(item, response, status, headers);
          }
          /**
           * @param {?} item
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "_onCompleteItem",
          value: function _onCompleteItem(item, response, status, headers) {
            item._onComplete(response, status, headers);

            this.onCompleteItem(item, response, status, headers);
            /** @type {?} */

            var nextItem = this.getReadyItems()[0];
            this.isUploading = false;

            if (nextItem) {
              nextItem.upload();
              return;
            }

            this.onCompleteAll();
            this.progress = this._getTotalProgress();

            this._render();
          }
          /**
           * @protected
           * @param {?} parsedHeaders
           * @return {?}
           */

        }, {
          key: "_headersGetter",
          value: function _headersGetter(parsedHeaders) {
            return (
              /**
              * @param {?} name
              * @return {?}
              */
              function (name) {
                if (name) {
                  return parsedHeaders[name.toLowerCase()] || void 0;
                }

                return parsedHeaders;
              }
            );
          }
          /**
           * @protected
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "_xhrTransport",
          value: function _xhrTransport(item) {
            var _this2 = this;

            /** @type {?} */
            var that = this;
            /** @type {?} */

            var xhr = item._xhr = new XMLHttpRequest();
            /** @type {?} */

            var sendable;

            this._onBeforeUploadItem(item);

            if (typeof item._file.size !== 'number') {
              throw new TypeError('The file specified is no longer valid');
            }

            if (!this.options.disableMultipart) {
              sendable = new FormData();

              this._onBuildItemForm(item, sendable);
              /** @type {?} */


              var appendFile =
              /**
              * @return {?}
              */
              function appendFile() {
                return sendable.append(item.alias, item._file, item.file.name);
              };

              if (!this.options.parametersBeforeFiles) {
                appendFile();
              } // For AWS, Additional Parameters must come BEFORE Files


              if (this.options.additionalParameter !== undefined) {
                Object.keys(this.options.additionalParameter).forEach(
                /**
                * @param {?} key
                * @return {?}
                */
                function (key) {
                  /** @type {?} */
                  var paramVal = _this2.options.additionalParameter[key]; // Allow an additional parameter to include the filename

                  if (typeof paramVal === 'string' && paramVal.indexOf('{{file_name}}') >= 0) {
                    paramVal = paramVal.replace('{{file_name}}', item.file.name);
                  }

                  sendable.append(key, paramVal);
                });
              }

              if (this.options.parametersBeforeFiles) {
                appendFile();
              }
            } else {
              sendable = this.options.formatDataFunction(item);
            }

            xhr.upload.onprogress =
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              /** @type {?} */
              var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);

              _this2._onProgressItem(item, progress);
            };

            xhr.onload =
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var headers = _this2._parseHeaders(xhr.getAllResponseHeaders());
              /** @type {?} */


              var response = _this2._transformResponse(xhr.response, headers);
              /** @type {?} */


              var gist = _this2._isSuccessCode(xhr.status) ? 'Success' : 'Error';
              /** @type {?} */

              var method = '_on' + gist + 'Item';

              /** @type {?} */
              _this2[method](item, response, xhr.status, headers);

              _this2._onCompleteItem(item, response, xhr.status, headers);
            };

            xhr.onerror =
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var headers = _this2._parseHeaders(xhr.getAllResponseHeaders());
              /** @type {?} */


              var response = _this2._transformResponse(xhr.response, headers);

              _this2._onErrorItem(item, response, xhr.status, headers);

              _this2._onCompleteItem(item, response, xhr.status, headers);
            };

            xhr.onabort =
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var headers = _this2._parseHeaders(xhr.getAllResponseHeaders());
              /** @type {?} */


              var response = _this2._transformResponse(xhr.response, headers);

              _this2._onCancelItem(item, response, xhr.status, headers);

              _this2._onCompleteItem(item, response, xhr.status, headers);
            };

            xhr.open(item.method, item.url, true);
            xhr.withCredentials = item.withCredentials;

            if (this.options.headers) {
              var _iterator2 = _createForOfIteratorHelper(this.options.headers),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var header = _step2.value;
                  xhr.setRequestHeader(header.name, header.value);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }

            if (item.headers.length) {
              var _iterator3 = _createForOfIteratorHelper(item.headers),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var _header = _step3.value;
                  xhr.setRequestHeader(_header.name, _header.value);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }

            if (this.authToken) {
              xhr.setRequestHeader(this.authTokenHeader, this.authToken);
            }

            xhr.onreadystatechange =
            /**
            * @return {?}
            */
            function () {
              if (xhr.readyState == XMLHttpRequest.DONE) {
                that.response.emit(xhr.responseText);
              }
            };

            if (this.options.formatDataFunctionIsAsync) {
              sendable.then(
              /**
              * @param {?} result
              * @return {?}
              */
              function (result) {
                return xhr.send(JSON.stringify(result));
              });
            } else {
              xhr.send(sendable);
            }

            this._render();
          }
          /**
           * @protected
           * @param {?=} value
           * @return {?}
           */

        }, {
          key: "_getTotalProgress",
          value: function _getTotalProgress() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            if (this.options.removeAfterUpload) {
              return value;
            }
            /** @type {?} */


            var notUploaded = this.getNotUploadedItems().length;
            /** @type {?} */

            var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
            /** @type {?} */

            var ratio = 100 / this.queue.length;
            /** @type {?} */

            var current = value * ratio / 100;
            return Math.round(uploaded * ratio + current);
          }
          /**
           * @protected
           * @param {?} filters
           * @return {?}
           */

        }, {
          key: "_getFilters",
          value: function _getFilters(filters) {
            if (!filters) {
              return this.options.filters;
            }

            if (Array.isArray(filters)) {
              return filters;
            }

            if (typeof filters === 'string') {
              /** @type {?} */
              var names = filters.match(/[^\s,]+/g);
              return this.options.filters.filter(
              /**
              * @param {?} filter
              * @return {?}
              */
              function (filter) {
                return names.indexOf(filter.name) !== -1;
              });
            }

            return this.options.filters;
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "_render",
          value: function _render() {
            return void 0;
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "_queueLimitFilter",
          value: function _queueLimitFilter() {
            return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
          }
          /**
           * @protected
           * @param {?} file
           * @param {?} filters
           * @param {?} options
           * @return {?}
           */

        }, {
          key: "_isValidFile",
          value: function _isValidFile(file, filters, options) {
            var _this3 = this;

            this._failFilterIndex = -1;
            return !filters.length ? true : filters.every(
            /**
            * @param {?} filter
            * @return {?}
            */
            function (filter) {
              _this3._failFilterIndex++;
              return filter.fn.call(_this3, file, options);
            });
          }
          /**
           * @protected
           * @param {?} status
           * @return {?}
           */

        }, {
          key: "_isSuccessCode",
          value: function _isSuccessCode(status) {
            return status >= 200 && status < 300 || status === 304;
          }
          /**
           * @protected
           * @param {?} response
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "_transformResponse",
          value: function _transformResponse(response, headers) {
            return response;
          }
          /**
           * @protected
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "_parseHeaders",
          value: function _parseHeaders(headers) {
            /** @type {?} */
            var parsed = {};
            /** @type {?} */

            var key;
            /** @type {?} */

            var val;
            /** @type {?} */

            var i;

            if (!headers) {
              return parsed;
            }

            headers.split('\n').map(
            /**
            * @param {?} line
            * @return {?}
            */
            function (line) {
              i = line.indexOf(':');
              key = line.slice(0, i).trim().toLowerCase();
              val = line.slice(i + 1).trim();

              if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
              }
            });
            return parsed;
          }
          /**
           * @protected
           * @param {?} item
           * @param {?} filter
           * @param {?} options
           * @return {?}
           */

        }, {
          key: "_onWhenAddingFileFailed",
          value: function _onWhenAddingFileFailed(item, filter, options) {
            this.onWhenAddingFileFailed(item, filter, options);
          }
          /**
           * @protected
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "_onAfterAddingFile",
          value: function _onAfterAddingFile(item) {
            this.onAfterAddingFile(item);
          }
          /**
           * @protected
           * @param {?} items
           * @return {?}
           */

        }, {
          key: "_onAfterAddingAll",
          value: function _onAfterAddingAll(items) {
            this.onAfterAddingAll(items);
          }
          /**
           * @protected
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "_onBeforeUploadItem",
          value: function _onBeforeUploadItem(item) {
            item._onBeforeUpload();

            this.onBeforeUploadItem(item);
          }
          /**
           * @protected
           * @param {?} item
           * @param {?} form
           * @return {?}
           */

        }, {
          key: "_onBuildItemForm",
          value: function _onBuildItemForm(item, form) {
            item._onBuildForm(form);

            this.onBuildItemForm(item, form);
          }
          /**
           * @protected
           * @param {?} item
           * @param {?} progress
           * @return {?}
           */

        }, {
          key: "_onProgressItem",
          value: function _onProgressItem(item, progress) {
            /** @type {?} */
            var total = this._getTotalProgress(progress);

            this.progress = total;

            item._onProgress(progress);

            this.onProgressItem(item, progress);
            this.onProgressAll(total);

            this._render();
          }
          /**
           * @protected
           * @param {?} item
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "_onSuccessItem",
          value: function _onSuccessItem(item, response, status, headers) {
            item._onSuccess(response, status, headers);

            this.onSuccessItem(item, response, status, headers);
          }
          /**
           * @protected
           * @param {?} item
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "_onCancelItem",
          value: function _onCancelItem(item, response, status, headers) {
            item._onCancel(response, status, headers);

            this.onCancelItem(item, response, status, headers);
          }
        }]);

        return FileUploader;
      }();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var FileSelectDirective = /*#__PURE__*/function () {
        /**
         * @param {?} element
         */
        function FileSelectDirective(element) {
          _classCallCheck(this, FileSelectDirective);

          this.onFileSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.element = element;
        }
        /**
         * @return {?}
         */


        _createClass(FileSelectDirective, [{
          key: "getOptions",
          value: function getOptions() {
            return this.uploader.options;
          }
          /**
           * @return {?}
           */

        }, {
          key: "getFilters",
          value: function getFilters() {
            return {};
          }
          /**
           * @return {?}
           */

        }, {
          key: "isEmptyAfterSelection",
          value: function isEmptyAfterSelection() {
            return !!this.element.nativeElement.attributes.multiple;
          }
          /**
           * @return {?}
           */

        }, {
          key: "onChange",
          value: function onChange() {
            /** @type {?} */
            var files = this.element.nativeElement.files;
            /** @type {?} */

            var options = this.getOptions();
            /** @type {?} */

            var filters = this.getFilters();
            this.uploader.addToQueue(files, options, filters);
            this.onFileSelected.emit(files);

            if (this.isEmptyAfterSelection()) {
              this.element.nativeElement.value = '';
            }
          }
        }]);

        return FileSelectDirective;
      }();

      FileSelectDirective.ɵfac = function FileSelectDirective_Factory(t) {
        return new (t || FileSelectDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      FileSelectDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: FileSelectDirective,
        selectors: [["", "ng2FileSelect", ""]],
        hostBindings: function FileSelectDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FileSelectDirective_change_HostBindingHandler() {
              return ctx.onChange();
            });
          }
        },
        inputs: {
          uploader: "uploader"
        },
        outputs: {
          onFileSelected: "onFileSelected"
        }
      });
      /** @nocollapse */

      FileSelectDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      FileSelectDirective.propDecorators = {
        uploader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onFileSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['change']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileSelectDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[ng2FileSelect]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          onFileSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],

          /**
           * @return {?}
           */
          onChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['change']
          }],
          uploader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var FileDropDirective = /*#__PURE__*/function () {
        /**
         * @param {?} element
         */
        function FileDropDirective(element) {
          _classCallCheck(this, FileDropDirective);

          this.fileOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onFileDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.element = element;
        }
        /**
         * @return {?}
         */


        _createClass(FileDropDirective, [{
          key: "getOptions",
          value: function getOptions() {
            return this.uploader.options;
          }
          /**
           * @return {?}
           */

        }, {
          key: "getFilters",
          value: function getFilters() {
            return {};
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onDrop",
          value: function onDrop(event) {
            /** @type {?} */
            var transfer = this._getTransfer(event);

            if (!transfer) {
              return;
            }
            /** @type {?} */


            var options = this.getOptions();
            /** @type {?} */

            var filters = this.getFilters();

            this._preventAndStop(event);

            this.uploader.addToQueue(transfer.files, options, filters);
            this.fileOver.emit(false);
            this.onFileDrop.emit(transfer.files);
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onDragOver",
          value: function onDragOver(event) {
            /** @type {?} */
            var transfer = this._getTransfer(event);

            if (!this._haveFiles(transfer.types)) {
              return;
            }

            transfer.dropEffect = 'copy';

            this._preventAndStop(event);

            this.fileOver.emit(true);
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onDragLeave",
          value: function onDragLeave(event) {
            if (
            /** @type {?} */
            this.element) {
              if (event.currentTarget ===
              /** @type {?} */
              this.element[0]) {
                return;
              }
            }

            this._preventAndStop(event);

            this.fileOver.emit(false);
          }
          /**
           * @protected
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "_getTransfer",
          value: function _getTransfer(event) {
            return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
          }
          /**
           * @protected
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "_preventAndStop",
          value: function _preventAndStop(event) {
            event.preventDefault();
            event.stopPropagation();
          }
          /**
           * @protected
           * @param {?} types
           * @return {?}
           */

        }, {
          key: "_haveFiles",
          value: function _haveFiles(types) {
            if (!types) {
              return false;
            }

            if (types.indexOf) {
              return types.indexOf('Files') !== -1;
            } else if (types.contains) {
              return types.contains('Files');
            } else {
              return false;
            }
          }
        }]);

        return FileDropDirective;
      }();

      FileDropDirective.ɵfac = function FileDropDirective_Factory(t) {
        return new (t || FileDropDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      FileDropDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: FileDropDirective,
        selectors: [["", "ng2FileDrop", ""]],
        hostBindings: function FileDropDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function FileDropDirective_drop_HostBindingHandler($event) {
              return ctx.onDrop($event);
            })("dragover", function FileDropDirective_dragover_HostBindingHandler($event) {
              return ctx.onDragOver($event);
            })("dragleave", function FileDropDirective_dragleave_HostBindingHandler($event) {
              return ctx.onDragLeave($event);
            });
          }
        },
        inputs: {
          uploader: "uploader"
        },
        outputs: {
          fileOver: "fileOver",
          onFileDrop: "onFileDrop"
        }
      });
      /** @nocollapse */

      FileDropDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      FileDropDirective.propDecorators = {
        uploader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fileOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onFileDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['drop', ['$event']]
        }],
        onDragOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['dragover', ['$event']]
        }],
        onDragLeave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['dragleave', ['$event']]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileDropDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[ng2FileDrop]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          fileOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onFileDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],

          /**
           * @param {?} event
           * @return {?}
           */
          onDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['drop', ['$event']]
          }],

          /**
           * @param {?} event
           * @return {?}
           */
          onDragOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragover', ['$event']]
          }],

          /**
           * @param {?} event
           * @return {?}
           */
          onDragLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragleave', ['$event']]
          }],
          uploader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var FileUploadModule = function FileUploadModule() {
        _classCallCheck(this, FileUploadModule);
      };

      FileUploadModule.ɵfac = function FileUploadModule_Factory(t) {
        return new (t || FileUploadModule)();
      };

      FileUploadModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: FileUploadModule
      });
      FileUploadModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FileUploadModule, {
          declarations: function declarations() {
            return [FileDropDirective, FileSelectDirective];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          },
          exports: function exports() {
            return [FileDropDirective, FileSelectDirective];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileUploadModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [FileDropDirective, FileSelectDirective],
            exports: [FileDropDirective, FileSelectDirective]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=ng2-file-upload.js.map

      /***/

    },

    /***/
    "ERjM":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/become-driver/become-driver.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function ERjM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>\r\n            <ion-label>Cyber</ion-label>\r\n        </ion-title>\r\n\r\n        <ion-buttons slot=\"end\">\r\n            <ion-icon (click)='openLanguagePopover($event)' id=\"toolbarIcon\" name=\"language-outline\"></ion-icon>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding class=\"background\">\r\n    <div class=\"row mt-2\">\r\n        <div class=\"col\">\r\n        </div>\r\n    </div>\r\n\r\n    <ion-content padding>\r\n        <div class=\"col text-center\">\r\n            <ion-text class=\"centered\" color=\"dark\">\r\n                <h3 class=\"text\">{{'Become a driver' | translate}}</h3>\r\n\r\n                <hr />\r\n                <h5 class=\"text mb-3\">{{'Please upload pictures of the following documents' | translate}}:</h5>\r\n            </ion-text>\r\n        </div>\r\n\r\n        <div class=\"input-group\">\r\n            <div class=\"input-group mb-1\">\r\n                <label type=\"text\" class=\"form-control\">1. {{'ID card front' | translate}}</label>\r\n                <div class=\"input-group-append\">\r\n                    <span>\r\n                        <input type=\"file\" #file1 placeholder=\"Choose file\" (change)=\"upload(file1.files)\"\r\n                            style=\"display:none;\">\r\n                        <label>\r\n                            <ion-icon name=\"add-outline\" color=\"dark\" (click)=\"file1.click()\"></ion-icon>\r\n                            <!-- <app-multi-file-upload></app-multi-file-upload> -->\r\n                        </label>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"input-group mb-1\">\r\n                <label type=\"text\" class=\"form-control\">2. {{'ID card back' | translate}}</label>\r\n                <div class=\"input-group-append\">\r\n                    <span>\r\n                        <input type=\"file\" #file2 placeholder=\"Choose file\" (change)=\"upload(file2.files)\"\r\n                            style=\"display:none;\">\r\n                        <label>\r\n                            <ion-icon name=\"add-outline\" color=\"dark\" (click)=\"file2.click()\"></ion-icon>\r\n                            <!-- <app-multi-file-upload></app-multi-file-upload> -->\r\n                        </label>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"input-group mb-1\">\r\n                <label type=\"text\" class=\"form-control\">3. {{'Driver license front' | translate}}</label>\r\n                <div class=\"input-group-append\">\r\n                    <span>\r\n                        <input type=\"file\" #file3 placeholder=\"Choose file\" (change)=\"upload(file3.files)\"\r\n                            style=\"display:none;\">\r\n                        <label>\r\n                            <ion-icon name=\"add-outline\" color=\"dark\" (click)=\"file3.click()\"></ion-icon>\r\n                            <!-- <app-multi-file-upload></app-multi-file-upload> -->\r\n                        </label>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"input-group mb-1\">\r\n                <label type=\"text\" class=\"form-control\">4. {{'Driver license back' | translate}}</label>\r\n                <div class=\"input-group-append\">\r\n                    <span>\r\n                        <input type=\"file\" #file4 placeholder=\"Choose file\" (change)=\"upload(file4.files)\"\r\n                            style=\"display:none;\">\r\n                        <label>\r\n                            <ion-icon name=\"add-outline\" color=\"dark\" (click)=\"file4.click()\"></ion-icon>\r\n                            <!-- <app-multi-file-upload></app-multi-file-upload> -->\r\n                        </label>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n        <ion-list>\r\n            <ion-reorder-group disabled=\"false\">\r\n                <ion-item *ngFor=\"let item of uploader.queue\">\r\n                    <ion-label>\r\n                        {{ item?.file?.name }}\r\n\r\n\r\n                    </ion-label>\r\n                </ion-item>\r\n            </ion-reorder-group>\r\n        </ion-list>\r\n\r\n\r\n\r\n        <div *ngIf=\"checker\">\r\n\r\n            <div class=\"col-md-4 mt-2\">\r\n                <div class=\"progress form-group\" *ngIf=\"progress > 0\">\r\n                    <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\"\r\n                        [style.width.%]=\"progress\">\r\n                    </div>\r\n                </div>\r\n\r\n                <span class=\"upload\" *ngIf=\"progress > 0\">\r\n                    {{progress}}%\r\n                </span>\r\n                <span class=\"upload\" *ngIf=\"message\">\r\n                    {{message}}\r\n                </span>\r\n            </div>\r\n        </div>\r\n        <ion-list>\r\n            <ion-item *ngFor=\"let pic of pics\">\r\n                <a class=\"text list-group-item list-group-item-action flex-column align-items-start\">\r\n                    <p>\r\n                        <img src=\"{{pic.path}}\" />\r\n                        <div class=\"text-center\">\r\n                            <h5 class=\"mb-1 fonted\"></h5>\r\n                            <button class=\"btn btn-danger\" (click)=\"removePicture(pic.id)\">{{'Delete' | translate}}</button>\r\n\r\n                        </div>\r\n                </a>\r\n\r\n            </ion-item>\r\n        </ion-list>\r\n\r\n\r\n        <div class=\"text-center mb-3\">\r\n            <button [disabled]=\"this.isDisabled == false\" (click)=\"onSubmit()\" type=\"submit\" class=\"btn btn-dark\">{{'Submit' | translate}}</button>\r\n        </div>\r\n    </ion-content>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "FH/S":
    /*!***************************************************************!*\
      !*** ./src/app/become-driver/become-driver-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: BecomeDriverPageRoutingModule */

    /***/
    function FHS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BecomeDriverPageRoutingModule", function () {
        return BecomeDriverPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _become_driver_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./become-driver.page */
      "kbdm");

      var routes = [{
        path: '',
        component: _become_driver_page__WEBPACK_IMPORTED_MODULE_3__["BecomeDriverPage"]
      }];

      var BecomeDriverPageRoutingModule = function BecomeDriverPageRoutingModule() {
        _classCallCheck(this, BecomeDriverPageRoutingModule);
      };

      BecomeDriverPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BecomeDriverPageRoutingModule);
      /***/
    },

    /***/
    "IEv6":
    /*!*******************************************************!*\
      !*** ./src/app/become-driver/become-driver.module.ts ***!
      \*******************************************************/

    /*! exports provided: HttpLoaderFactory, BecomeDriverPageModule */

    /***/
    function IEv6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
        return HttpLoaderFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BecomeDriverPageModule", function () {
        return BecomeDriverPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _become_driver_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./become-driver-routing.module */
      "FH/S");
      /* harmony import */


      var _become_driver_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./become-driver.page */
      "kbdm");
      /* harmony import */


      var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng2-file-upload */
      "7pIB");
      /* harmony import */


      var _multi_file_upload_multi_file_upload_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../multi-file-upload/multi-file-upload.component */
      "bGik");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../_services */
      "8Xdb");
      /* harmony import */


      var _services_image_image_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../_services/image/image.service */
      "Jhu6");
      /* harmony import */


      var _services_driver_driver_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../_services/driver/driver.service */
      "exMm");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "mqiu");
      /* harmony import */


      var _language_popover_language_popover_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../language-popover/language-popover.module */
      "QhVT");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function HttpLoaderFactory(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__["TranslateHttpLoader"](http);
      }

      var BecomeDriverPageModule = function BecomeDriverPageModule(accountService, imageService, driverService) {
        _classCallCheck(this, BecomeDriverPageModule);

        this.accountService = accountService;
        this.imageService = imageService;
        this.driverService = driverService;
        this.folderName = "driverFacePic";
        this.imgType = "personalImg";
        this.applicationUserId = this.accountService.userValue.id;
      };

      BecomeDriverPageModule.ctorParameters = function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_9__["AccountService"]
        }, {
          type: _services_image_image_service__WEBPACK_IMPORTED_MODULE_10__["ImageService"]
        }, {
          type: _services_driver_driver_service__WEBPACK_IMPORTED_MODULE_11__["DriverService"]
        }];
      };

      BecomeDriverPageModule.propDecorators = {
        fileField: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_multi_file_upload_multi_file_upload_component__WEBPACK_IMPORTED_MODULE_8__["MultiFileUploadComponent"]]
        }]
      };
      BecomeDriverPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _become_driver_routing_module__WEBPACK_IMPORTED_MODULE_5__["BecomeDriverPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateModule"].forChild({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateLoader"],
            useFactory: HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]]
          }
        }), _language_popover_language_popover_module__WEBPACK_IMPORTED_MODULE_14__["LanguagePopoverPageModule"]],
        declarations: [_become_driver_page__WEBPACK_IMPORTED_MODULE_6__["BecomeDriverPage"], _multi_file_upload_multi_file_upload_component__WEBPACK_IMPORTED_MODULE_8__["MultiFileUploadComponent"]]
      })], BecomeDriverPageModule);
      /***/
    },

    /***/
    "MQjB":
    /*!********************************************************************!*\
      !*** ./src/app/multi-file-upload/multi-file-upload.component.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function MQjB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".file-input-container {\n  text-align: right;\n}\n\ninput[type=file] {\n  display: none;\n}\n\nlabel {\n  border: 1px solid #ccc;\n  padding: 8px 15px;\n  cursor: pointer;\n}\n\n.nv-file-over {\n  border: dotted 3px red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG11bHRpLWZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjs7QUFHQTtFQUNJLGFBQUE7QUFBSjs7QUFHQTtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQUo7O0FBRUE7RUFDSSxzQkFBQTtBQUNKIiwiZmlsZSI6Im11bHRpLWZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbGUtaW5wdXQtY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cclxuICAgIFxyXG59XHJcbmlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubnYtZmlsZS1vdmVyIHtcclxuICAgIGJvcmRlcjogZG90dGVkIDNweCByZWQ7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "bGik":
    /*!******************************************************************!*\
      !*** ./src/app/multi-file-upload/multi-file-upload.component.ts ***!
      \******************************************************************/

    /*! exports provided: MultiFileUploadComponent */

    /***/
    function bGik(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MultiFileUploadComponent", function () {
        return MultiFileUploadComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_multi_file_upload_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./multi-file-upload.component.html */
      "bHLa");
      /* harmony import */


      var _multi_file_upload_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./multi-file-upload.component.scss */
      "MQjB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng2-file-upload */
      "7pIB");

      var MultiFileUploadComponent = /*#__PURE__*/function () {
        function MultiFileUploadComponent() {
          _classCallCheck(this, MultiFileUploadComponent);

          this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploader"]({});
          this.hasBaseDropZoneOver = false;
        }

        _createClass(MultiFileUploadComponent, [{
          key: "getFiles",
          value: function getFiles() {
            return this.uploader.queue.map(function (fileItem) {
              return fileItem.file;
            });
          }
        }, {
          key: "fileOverBase",
          value: function fileOverBase(ev) {
            this.hasBaseDropZoneOver = ev;
          }
        }, {
          key: "reorderFiles",
          value: function reorderFiles(reorderEvent) {
            var element = this.uploader.queue.splice(reorderEvent.detail.from, 1)[0];
            this.uploader.queue.splice(reorderEvent.detail.to, 0, element);
          }
        }]);

        return MultiFileUploadComponent;
      }();

      MultiFileUploadComponent.ctorParameters = function () {
        return [];
      };

      MultiFileUploadComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-multi-file-upload',
        template: _raw_loader_multi_file_upload_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_multi_file_upload_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MultiFileUploadComponent);
      /***/
    },

    /***/
    "bHLa":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/multi-file-upload/multi-file-upload.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bHLa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"file-input-container \">\r\n    <label>\r\n        <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple />\r\n        <ion-icon name=\"add-outline\" color=\"dark\"></ion-icon>\r\n    </label>\r\n</div>\r\n\r\n<!-- <h3>Files: {{ uploader?.queue?.length }}</h3> -->\r\n<br>\r\n\r\n<!-- <ion-list>\r\n    <ion-reorder-group (ionItemReorder)=\"reorderFiles($event)\" disabled=\"false\">\r\n        <ion-item *ngFor=\"let item of uploader.queue\">\r\n            <ion-label>\r\n                {{ item?.file?.name }}\r\n            </ion-label>\r\n            <ion-reorder></ion-reorder>\r\n        </ion-item>\r\n    </ion-reorder-group>\r\n</ion-list> -->";
      /***/
    },

    /***/
    "kbdm":
    /*!*****************************************************!*\
      !*** ./src/app/become-driver/become-driver.page.ts ***!
      \*****************************************************/

    /*! exports provided: BecomeDriverPage */

    /***/
    function kbdm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BecomeDriverPage", function () {
        return BecomeDriverPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_become_driver_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./become-driver.page.html */
      "ERjM");
      /* harmony import */


      var _become_driver_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./become-driver.page.scss */
      "46YJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/_services */
      "8Xdb");
      /* harmony import */


      var src_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/_services/driver/driver.service */
      "exMm");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var src_services_image_image_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/_services/image/image.service */
      "Jhu6");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _multi_file_upload_multi_file_upload_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../multi-file-upload/multi-file-upload.component */
      "bGik");
      /* harmony import */


      var ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng2-file-upload */
      "7pIB");
      /* harmony import */


      var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @aspnet/signalr */
      "Gpoy");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _language_popover_language_popover_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../language-popover/language-popover.page */
      "oXKM");

      var BecomeDriverPage = /*#__PURE__*/function () {
        function BecomeDriverPage(route, accountService, location, imageService, driverService, alertController, popoverController, translate) {
          _classCallCheck(this, BecomeDriverPage);

          this.route = route;
          this.accountService = accountService;
          this.location = location;
          this.imageService = imageService;
          this.driverService = driverService;
          this.alertController = alertController;
          this.popoverController = popoverController;
          this.translate = translate;
          this.folderName = "driverFacePic";
          this.imgType = "personalImg";
          this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__["FileUploader"]({});
          this.hasBaseDropZoneOver = false;
          this.applicationUserId = this.accountService.userValue.id;
          this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
        }

        _createClass(BecomeDriverPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.getDocs();

            if (this.getDocs.length >= 4) {
              this.checker = true;
            }

            this.checker = false;
            var connection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_12__["HubConnectionBuilder"]().configureLogging(_aspnet_signalr__WEBPACK_IMPORTED_MODULE_12__["LogLevel"].Information).withUrl("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].signalRUrl, "/orderHub")).build();
            connection.start().then(function () {
              console.log('signalR Connected in menu');
            })["catch"](function (err) {
              console.log("Reconnecting in 1 sec.");
              setTimeout(function () {
                return connection.start();
              }, 1000);
            });
            connection.on('OnUpload', function (userId) {
              _this4.getDocs();
            });
          }
        }, {
          key: "getFiles",
          value: function getFiles() {
            return this.uploader.queue.map(function (fileItem) {
              return fileItem.file;
            });
          }
        }, {
          key: "getDocs",
          value: function getDocs() {
            var _this5 = this;

            this.imageService.getUserDocuments(this.applicationUserId).subscribe(function (x) {
              console.log(x);
              _this5.pics = x;

              if (_this5.pics.length !== 4) {
                _this5.isDisabled = true;
              }
            });
          }
        }, {
          key: "upload",
          value: function upload(files) {
            var _this6 = this;

            if (files === 0) {
              return;
            }

            var fileToUpload = files[0];
            var formData = new FormData();
            formData.append('file', fileToUpload, fileToUpload.name);
            this.imageService.upload(formData, this.folderName, this.applicationUserId, this.imgType).subscribe(function (event) {
              if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpEventType"].UploadProgress) _this6.progress = Math.round(100 * event.loaded / event.total);else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpEventType"].Response) {
                _this6.message = 'Documents uploaded successfully.';
              }

              switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpEventType"].Sent:
                  console.log('Request has been made!');
                  break;

                case _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpEventType"].ResponseHeader:
                  console.log('Response header has been received!');
                  break;

                case _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpEventType"].UploadProgress:
                  _this6.progress = Math.round(event.loaded / event.total * 100);
                  break;

                case _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpEventType"].Response:
                  setTimeout(function () {
                    _this6.progress = 0;
                  }, 1500);
              }
            });
          }
        }, {
          key: "removePicture",
          value: function removePicture(id) {
            this.picDelete(id);
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.location.back();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this7 = this;

            this.imageService.getUserDocuments(this.applicationUserId).subscribe(function (x) {
              if (_this7.pics.length >= 4) {
                var data = {
                  ApplicationUserId: _this7.applicationUserId
                };

                _this7.driverService.createDriver(data).subscribe(function () {
                  _this7.route.navigate(['menu/car-register']);
                });
              } else if (x.id == null) {
                _this7.notEnoughImages();
              } else {
                _this7.message = 'Please upload your documents!';
              }
            });
          }
        }, {
          key: "openLanguagePopover",
          value: function openLanguagePopover(ev) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var popover;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.popoverController.create({
                        component: _language_popover_language_popover_page__WEBPACK_IMPORTED_MODULE_16__["LanguagePopoverPage"],
                        event: ev
                      });

                    case 2:
                      popover = _context.sent;
                      _context.next = 5;
                      return popover.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "notEnoughImages",
          value: function notEnoughImages() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this8 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.translate.get(['You have to upload 4 document pictures.']).subscribe(function (text) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                          var popup;
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  _context2.next = 2;
                                  return this.alertController.create({
                                    header: text['You have to upload 4 document pictures.'],
                                    buttons: [{
                                      text: 'Ok',
                                      role: 'Ok'
                                    }]
                                  });

                                case 2:
                                  popup = _context2.sent;
                                  _context2.next = 5;
                                  return popup.present();

                                case 5:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2, this);
                        }));
                      });

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "picDelete",
          value: function picDelete(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this9 = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.translate.get(['Delete the picture?', 'Yes', 'No']).subscribe(function (text) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                          var _this10 = this;

                          var popup;
                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  _context4.next = 2;
                                  return this.alertController.create({
                                    header: text['Delete the picture?'],
                                    buttons: [{
                                      text: text['Yes'],
                                      handler: function handler() {
                                        _this10.imageService.removeDocument(id).subscribe(function (x) {
                                          console.log('Image removed sucessfully');
                                        });
                                      }
                                    }, {
                                      text: text['No'],
                                      role: 'no'
                                    }]
                                  });

                                case 2:
                                  popup = _context4.sent;
                                  _context4.next = 5;
                                  return popup.present();

                                case 5:
                                case "end":
                                  return _context4.stop();
                              }
                            }
                          }, _callee4, this);
                        }));
                      });

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return BecomeDriverPage;
      }();

      BecomeDriverPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_services__WEBPACK_IMPORTED_MODULE_5__["AccountService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]
        }, {
          type: src_services_image_image_service__WEBPACK_IMPORTED_MODULE_8__["ImageService"]
        }, {
          type: src_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_6__["DriverService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["PopoverController"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"]
        }];
      };

      BecomeDriverPage.propDecorators = {
        fileField: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_multi_file_upload_multi_file_upload_component__WEBPACK_IMPORTED_MODULE_10__["MultiFileUploadComponent"]]
        }]
      };
      BecomeDriverPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-become-driver',
        template: _raw_loader_become_driver_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_become_driver_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BecomeDriverPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=become-driver-become-driver-module-es5.js.map