using Microsoft.EntityFrameworkCore.Migrations;

namespace TravelApp.Data.Migrations
{
    public partial class finishaddit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderOptions_Orders_OrderId",
                table: "OrderOptions");

            migrationBuilder.DropIndex(
                name: "IX_OrderOptions_OrderId",
                table: "OrderOptions");

            migrationBuilder.DropColumn(
                name: "AdditionalOption",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "OrderId",
                table: "OrderOptions");

            migrationBuilder.AddColumn<bool>(
                name: "Special",
                table: "Orders",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "WithPets",
                table: "Orders",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "WithStroller",
                table: "Orders",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Special",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "WithPets",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "WithStroller",
                table: "Orders");

            migrationBuilder.AddColumn<string>(
                name: "AdditionalOption",
                table: "Orders",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "OrderId",
                table: "OrderOptions",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_OrderOptions_OrderId",
                table: "OrderOptions",
                column: "OrderId");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderOptions_Orders_OrderId",
                table: "OrderOptions",
                column: "OrderId",
                principalTable: "Orders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
