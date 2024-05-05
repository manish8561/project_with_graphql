import { Injectable } from "@nestjs/common";
import { CreateProductInput } from "./dto/create-product.input";
import { UpdateProductInput } from "./dto/update-product.input";

@Injectable()
export class ProductsService {
  create(createProductInput: CreateProductInput) {
    console.log(createProductInput);
    return "This action adds a new product";
  }

  findAll() {
    // return `This action returns all products`;
    return [
      {
        id: "first",
        name: "First Product",
        description: "First Product Description",
        price: 10.5,
        status: "active",
      },
    ];
  }

  findOne(id: string) {
    return {
      id,
      name: "First Product",
      description: "First Product Description",
      price: 10.5,
      status: "active",
    };
  }

  update(id: string, updateProductInput: UpdateProductInput) {
    return `This action updates a #${id} product`;
  }

  remove(id: string) {
    return `This action removes a #${id} product`;
  }
}
