-- CreateTable
CREATE TABLE "User" (
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "telephone" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("name")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_telephone_key" ON "User"("telephone");
