-- CreateEnum
CREATE TYPE "TicketStatus" AS ENUM ('pending', 'accepted', 'resolved', 'rejected');

-- CreateTable
CREATE TABLE "Ticket" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "status" "TicketStatus" NOT NULL,
    "created" TIMESTAMPTZ NOT NULL,
    "isDelete" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Ticket.id_unique" ON "Ticket"("id");
