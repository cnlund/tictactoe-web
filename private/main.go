package main

import "github.com/gofiber/fiber/v2"

func main() {
	web := fiber.New()
	web.Static("/tictactoe-web/", "public/index.html")
	web.Listen(":403")
}
