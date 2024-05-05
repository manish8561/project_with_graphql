import { Injectable } from "@nestjs/common";
import { CreateProductInput } from "./dto/create-product.input";
import { UpdateProductInput } from "./dto/update-product.input";

@Injectable()
export class ProductsService {
  create(createProductInput: CreateProductInput) {
    return "This action adds a new product";
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: string) {
    // return `This action returns a #${id} product`;
    return {
      id: "first",
      name: "First Product",
      description: "First Product Description",
    };
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}