using Microsoft.EntityFrameworkCore.Migrations;

namespace TravelApp.Data.Migrations
{
    public partial class driversecondchange : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "DriverLicanse",
                table: "Drivers",
                newName: "DriverLicense");

            migrationBuilder.RenameColumn(
                name: "DocumentConfirmatiom",
                table: "Drivers",
                newName: "DocumentConfirmation");

            migrationBuilder.AddColumn<string>(
                name: "ApplicationUserId",
                table: "Wallets",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ApplicationUserId",
                table: "Wallets");

            migrationBuilder.RenameColumn(
                name: "DriverLicense",
                table: "Drivers",
                newName: "DriverLicanse");

            migrationBuilder.RenameColumn(
                name: "DocumentConfirmation",
                table: "Drivers",
                newName: "DocumentConfirmatiom");
        }
    }
}
