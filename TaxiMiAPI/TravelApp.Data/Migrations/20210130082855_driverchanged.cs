using Microsoft.EntityFrameworkCore.Migrations;

namespace TravelApp.Data.Migrations
{
    public partial class driverchanged : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Drivers_DriverId",
                table: "AspNetUsers");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_DriverId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "DriverId",
                table: "AspNetUsers");

            migrationBuilder.AddColumn<string>(
                name: "ApplicationUserId",
                table: "Drivers",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Drivers_ApplicationUserId",
                table: "Drivers",
                column: "ApplicationUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Drivers_AspNetUsers_ApplicationUserId",
                table: "Drivers",
                column: "ApplicationUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Drivers_AspNetUsers_ApplicationUserId",
                table: "Drivers");

            migrationBuilder.DropIndex(
                name: "IX_Drivers_ApplicationUserId",
                table: "Drivers");

            migrationBuilder.DropColumn(
                name: "ApplicationUserId",
                table: "Drivers");

            migrationBuilder.AddColumn<string>(
                name: "DriverId",
                table: "AspNetUsers",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_DriverId",
                table: "AspNetUsers",
                column: "DriverId");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_Drivers_DriverId",
                table: "AspNetUsers",
                column: "DriverId",
                principalTable: "Drivers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
