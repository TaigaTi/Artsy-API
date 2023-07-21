-- CreateTable
CREATE TABLE "Artist" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "email" TEXT NOT NULL,

    CONSTRAINT "Artist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gallery" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "Gallery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Piece" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "artistId" INTEGER NOT NULL,

    CONSTRAINT "Piece_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ArtistToGallery" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_GalleryToPiece" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Piece_id_key" ON "Piece"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_ArtistToGallery_AB_unique" ON "_ArtistToGallery"("A", "B");

-- CreateIndex
CREATE INDEX "_ArtistToGallery_B_index" ON "_ArtistToGallery"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_GalleryToPiece_AB_unique" ON "_GalleryToPiece"("A", "B");

-- CreateIndex
CREATE INDEX "_GalleryToPiece_B_index" ON "_GalleryToPiece"("B");

-- AddForeignKey
ALTER TABLE "Piece" ADD CONSTRAINT "Piece_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArtistToGallery" ADD CONSTRAINT "_ArtistToGallery_A_fkey" FOREIGN KEY ("A") REFERENCES "Artist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArtistToGallery" ADD CONSTRAINT "_ArtistToGallery_B_fkey" FOREIGN KEY ("B") REFERENCES "Gallery"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GalleryToPiece" ADD CONSTRAINT "_GalleryToPiece_A_fkey" FOREIGN KEY ("A") REFERENCES "Gallery"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GalleryToPiece" ADD CONSTRAINT "_GalleryToPiece_B_fkey" FOREIGN KEY ("B") REFERENCES "Piece"("id") ON DELETE CASCADE ON UPDATE CASCADE;
