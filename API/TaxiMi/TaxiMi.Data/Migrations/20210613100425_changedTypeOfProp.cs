using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace TaxiMi.Data.Migrations
{
    public partial class changedTypeOfProp : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Price",
                table: "Options",
                newName: "TotalPrice");

            migrationBuilder.AlterColumn<int>(
                name: "OptionsId",
                table: "SuburbanOrders",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "AcceptedBy",
                table: "Options",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "Date",
                table: "Options",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "Info",
                table: "Options",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Status",
                table: "Options",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AcceptedBy",
                table: "Options");

            migrationBuilder.DropColumn(
                name: "Date",
                table: "Options");

            migrationBuilder.DropColumn(
                name: "Info",
                table: "Options");

            migrationBuilder.DropColumn(
                name: "Status",
                table: "Options");

            migrationBuilder.RenameColumn(
                name: "TotalPrice",
                table: "Options",
                newName: "Price");

            migrationBuilder.AlterColumn<string>(
                name: "OptionsId",
                table: "SuburbanOrders",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");
        }
    }
}
