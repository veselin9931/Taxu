using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace TravelApp.Data.Migrations
{
    public partial class aspuserfix : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_ApplicationRole_ApplicationRoleId",
                table: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "ApplicationRole");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_ApplicationRoleId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "ApplicationRoleId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "ApplicationRoleName",
                table: "AspNetUsers");

            migrationBuilder.AlterColumn<string>(
                name: "CurrentLocation",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "CurrentLocation",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ApplicationRoleId",
                table: "AspNetUsers",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ApplicationRoleName",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "ApplicationRole",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    CreatedOn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DeletedOn = table.Column<DateTime>(type: "datetime2", nullable: true),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    ModifiedOn = table.Column<DateTime>(type: "datetime2", nullable: true),
                    RoleName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ApplicationRole", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_ApplicationRoleId",
                table: "AspNetUsers",
                column: "ApplicationRoleId");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_ApplicationRole_ApplicationRoleId",
                table: "AspNetUsers",
                column: "ApplicationRoleId",
                principalTable: "ApplicationRole",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
