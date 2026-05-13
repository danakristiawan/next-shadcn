"use server"

import { db } from "@/db/drizzle"
import { User, users } from "@/db/schema"
import { eq } from "drizzle-orm"

export async function getUsers() {
  try {
    const usersList = await db.select().from(users)
    return usersList
  } catch (error) {
    console.error("Error fetching users:", error)
    throw new Error("Failed to fetch users")
  }
}

export async function createUser(
  user: Omit<User, "id" | "createdAt" | "updatedAt">
) {
  try {
    await db.insert(users).values(user)
  } catch (error) {
    console.error("Error creating user:", error)
    throw new Error("Failed to create user")
  }
}

export async function updateUser(user: Omit<User, "createdAt" | "updatedAt">) {
  try {
    await db.update(users).set(user).where(eq(users.id, user.id))
  } catch (error) {
    console.error("Error updating user:", error)
    throw new Error("Failed to update user")
  }
}

export async function deleteUser(id: string) {
  try {
    await db.delete(users).where(eq(users.id, id))
  } catch (error) {
    console.error("Error deleting user:", error)
    throw new Error("Failed to delete user")
  }
}
