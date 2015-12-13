/// <reference path="../../../typings/tsd.d.ts" />

export module QuickExams.Shared.Domain {
  export class IdEntity {
    public id: Number;
  }

  export class KeyValue extends IdEntity {
    public name: String;
  }

  export class Exam extends KeyValue {
    public subCategory: SubCategory;
  }

  export class Category extends KeyValue { }

  export class SubCategory extends KeyValue {
    public subCategory: SubCategory;
  }
}