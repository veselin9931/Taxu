using Microsoft.EntityFrameworkCore.Migrations;

namespace TravelApp.Data.Migrations
{
    public partial class dbupdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cars_CarTypes_TypeId1",
                table: "Cars");

            migrationBuilder.DropIndex(
                name: "IX_Cars_TypeId1",
                table: "Cars");

            migrationBuilder.DropColumn(
                name: "DocumentsUploaded",
                table: "Drivers");

            migrationBuilder.DropColumn(
                name: "TypeId1",
                table: "Cars");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "DocumentsUploaded",
                table: "Drivers",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "TypeId1",
                table: "Cars",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Cars_TypeId1",
                table: "Cars",
                column: "TypeId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Cars_CarTypes_TypeId1",
                table: "Cars",
                column: "TypeId1",
                principalTable: "CarTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
