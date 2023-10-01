import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EmployeeDocument = Employee & Document;

@Schema({
  timestamps: true,
})
export class Employee {
  @Prop({ required: true })
  firstname: string;

  @Prop()
  surname?: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  phonenumber: number;

  @Prop()
  gender: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
