using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace TravelApp.Data.Migrations
{
    public partial class NewOptionsToOrder : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "OrderOptionsId",
                table: "Orders",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "OrderOptions",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IncreaseAmmoun = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    CreatedOn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ModifiedOn = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderOptions", x => x.Id);
                });

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Orders_OrderOptions_OrderOptionsId",
                table: "Orders");

            migrationBuilder.DropTable(
                name: "OrderOptions");

            migrationBuilder.DropIndex(
                name: "IX_Orders_OrderOptionsId",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "OrderOptionsId",
                table: "Orders");
        }
    }
}
