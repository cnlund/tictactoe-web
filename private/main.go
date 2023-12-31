package main

import "github.com/gofiber/fiber/v2"

func paginaHandler(c *fiber.Ctx) error {
	return c.SendFile("public/index.html")
}

func main() {
	web := fiber.New()
	web.Get("/tictactoe-web/", paginaHandler)
	web.Listen(":403")
}
