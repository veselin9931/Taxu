using Microsoft.EntityFrameworkCore.Migrations;

namespace TravelApp.Data.Migrations
{
    public partial class tripadd : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Trips_Cars_CarId",
                table: "Trips");

            migrationBuilder.DropIndex(
                name: "IX_Trips_CarId",
                table: "Trips");

            migrationBuilder.DropColumn(
                name: "CarId",
                table: "Trips");

            migrationBuilder.DropColumn(
                name: "Destination",
                table: "Trips");

            migrationBuilder.DropColumn(
                name: "Location",
                table: "Trips");

            migrationBuilder.AlterColumn<string>(
                name: "CurrentLocation",
                table: "Trips",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddColumn<string>(
                name: "ApplicationUserId",
                table: "Trips",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "OrderId",
                table: "Trips",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Trips_ApplicationUserId",
                table: "Trips",
                column: "ApplicationUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Trips_OrderId",
                table: "Trips",
                column: "OrderId");

            migrationBuilder.AddForeignKey(
                name: "FK_Trips_AspNetUsers_ApplicationUserId",
                table: "Trips",
                column: "ApplicationUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Trips_Orders_OrderId",
                table: "Trips",
                column: "OrderId",
                principalTable: "Orders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Trips_AspNetUsers_ApplicationUserId",
                table: "Trips");

            migrationBuilder.DropForeignKey(
                name: "FK_Trips_Orders_OrderId",
                table: "Trips");

            migrationBuilder.DropIndex(
                name: "IX_Trips_ApplicationUserId",
                table: "Trips");

            migrationBuilder.DropIndex(
                name: "IX_Trips_OrderId",
                table: "Trips");

            migrationBuilder.DropColumn(
                name: "ApplicationUserId",
                table: "Trips");

            migrationBuilder.DropColumn(
                name: "OrderId",
                table: "Trips");

            migrationBuilder.AlterColumn<string>(
                name: "CurrentLocation",
                table: "Trips",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CarId",
                table: "Trips",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Destination",
                table: "Trips",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Location",
                table: "Trips",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateIndex(
                name: "IX_Trips_CarId",
                table: "Trips",
                column: "CarId");

            migrationBuilder.AddForeignKey(
                name: "FK_Trips_Cars_CarId",
                table: "Trips",
                column: "CarId",
                principalTable: "Cars",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
