using Microsoft.EntityFrameworkCore.Migrations;

namespace TravelApp.Data.Migrations
{
    public partial class reportfix : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Reports_Drivers_SuspectedDriverId",
                table: "Reports");

            migrationBuilder.DropIndex(
                name: "IX_Reports_SuspectedDriverId",
                table: "Reports");

            migrationBuilder.DropColumn(
                name: "SuspectedDriverId",
                table: "Reports");

            migrationBuilder.AddColumn<string>(
                name: "SuspectedUserId",
                table: "Reports",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SuspectedUserId",
                table: "Reports");

            migrationBuilder.AddColumn<string>(
                name: "SuspectedDriverId",
                table: "Reports",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Reports_SuspectedDriverId",
                table: "Reports",
                column: "SuspectedDriverId");

            migrationBuilder.AddForeignKey(
                name: "FK_Reports_Drivers_SuspectedDriverId",
                table: "Reports",
                column: "SuspectedDriverId",
                principalTable: "Drivers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
