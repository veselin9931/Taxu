using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace TaxiMi.Data.Migrations
{
    public partial class additionalstime : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "PickUpTime",
                table: "Orders",
                type: "datetime2",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PickUpTime",
                table: "Orders");
        }
    }
}
