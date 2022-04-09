import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity({ name: "ADM_FLOW" })
export default class ADM_FLOW {
  @PrimaryColumn()
  FLOW_ID!: number;

  @Column()
  FLOW_NAME!: string;
}
