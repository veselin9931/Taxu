using Microsoft.EntityFrameworkCore.Migrations;

namespace TravelApp.Data.Migrations
{
    public partial class rateorder : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsRated",
                table: "Orders",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsRated",
                table: "Orders");
        }
    }
}
