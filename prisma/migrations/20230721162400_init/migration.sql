/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Artist` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `Piece` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Piece_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "Artist_email_key" ON "Artist"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Piece_title_key" ON "Piece"("title");
