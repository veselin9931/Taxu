using Microsoft.EntityFrameworkCore.Migrations;

namespace TravelApp.Data.Migrations
{
    public partial class additionals1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Orders_OrderOptions_OrderOptionsId",
                table: "Orders");

            migrationBuilder.DropIndex(
                name: "IX_Orders_OrderOptionsId",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "OrderOptionsId",
                table: "Orders");

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderOptions_Orders_OrderId",
                table: "OrderOptions");

            migrationBuilder.DropIndex(
                name: "IX_OrderOptions_OrderId",
                table: "OrderOptions");

            migrationBuilder.DropColumn(
                name: "OrderId",
                table: "OrderOptions");

            migrationBuilder.AddColumn<string>(
                name: "OrderOptionsId",
                table: "Orders",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Orders_OrderOptionsId",
                table: "Orders",
                column: "OrderOptionsId");

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_OrderOptions_OrderOptionsId",
                table: "Orders",
                column: "OrderOptionsId",
                principalTable: "OrderOptions",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
