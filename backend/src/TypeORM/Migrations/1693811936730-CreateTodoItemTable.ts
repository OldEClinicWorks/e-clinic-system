import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class CreateTodoItemTable1693811936730 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "todo_item",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "title",
            type: "varchar",
          },          
          // Add more columns if necessary
        ],
      })
    );

    // Add a foreign key constraint to link the owner_id to the User table
    await queryRunner.addColumn(
      "todo_item",
      new TableColumn({
        name: "owner_id",
        type: "integer",
      })
    );

    await queryRunner.createForeignKey(
      "todo_item",
      new TableForeignKey({
        columnNames: ["owner_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "user", // The name of the User table
        onDelete: "CASCADE", // Specify the desired behavior on deletion
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Drop the foreign key constraint first
    const table = await queryRunner.getTable("todo_item");
    const foreignKey = table.foreignKeys.find((fk) =>
      fk.columnNames.includes("owner_id")
    );
    if (foreignKey) {
      await queryRunner.dropForeignKey("todo_item", foreignKey);
    }

    // Drop the TodoItem table
    await queryRunner.dropTable("todo_item");
  }
}
