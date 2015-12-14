var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var QuickExams;
(function (QuickExams) {
    var Shared;
    (function (Shared) {
        var Domain;
        (function (Domain) {
            var IdEntity = (function () {
                function IdEntity() {
                }
                return IdEntity;
            })();
            Domain.IdEntity = IdEntity;
            var KeyValue = (function (_super) {
                __extends(KeyValue, _super);
                function KeyValue() {
                    _super.apply(this, arguments);
                }
                return KeyValue;
            })(IdEntity);
            Domain.KeyValue = KeyValue;
            var Exam = (function (_super) {
                __extends(Exam, _super);
                function Exam() {
                    _super.apply(this, arguments);
                }
                return Exam;
            })(KeyValue);
            Domain.Exam = Exam;
            var Category = (function (_super) {
                __extends(Category, _super);
                function Category() {
                    _super.apply(this, arguments);
                }
                return Category;
            })(KeyValue);
            Domain.Category = Category;
            var SubCategory = (function (_super) {
                __extends(SubCategory, _super);
                function SubCategory() {
                    _super.apply(this, arguments);
                }
                return SubCategory;
            })(KeyValue);
            Domain.SubCategory = SubCategory;
        })(Domain = Shared.Domain || (Shared.Domain = {}));
    })(Shared = QuickExams.Shared || (QuickExams.Shared = {}));
})(QuickExams = exports.QuickExams || (exports.QuickExams = {}));
