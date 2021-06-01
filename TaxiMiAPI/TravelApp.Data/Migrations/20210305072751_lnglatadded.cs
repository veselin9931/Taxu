using Microsoft.EntityFrameworkCore.Migrations;

namespace TravelApp.Data.Migrations
{
    public partial class lnglatadded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "DestinationLat",
                table: "Orders",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "DestinationLong",
                table: "Orders",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "LocationLat",
                table: "Orders",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "LocationLong",
                table: "Orders",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "CurrentLocationLat",
                table: "Drivers",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "CurrentLocationLong",
                table: "Drivers",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DestinationLat",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "DestinationLong",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "LocationLat",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "LocationLong",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "CurrentLocationLat",
                table: "Drivers");

            migrationBuilder.DropColumn(
                name: "CurrentLocationLong",
                table: "Drivers");
        }
    }
}
