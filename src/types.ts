
export interface Category {
    name: string;
    fields: {
      name: {
        stringValue: string;
      };
    };
  }
  
  export interface Product {
    name: string;
    fields: {
      name: {
        stringValue: string;
      };
      price: {
        doubleValue: number;
      };
      image: {
        stringValue: string;
      };
    };
  }
  