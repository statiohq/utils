import { WebhookClient } from "discord.js";
import * as time from "./time";

let webhookClient: WebhookClient;

let discordQueue: string[] = [];

export function startLogging() {
    if (!webhookClient) {
        webhookClient = new WebhookClient({
            url: process.env.DISCORD_WEBHOOK_WEBLOGS || "",
        });
    }

    setInterval(() => {
        if (discordQueue.length > 0) {
            let messages = [""];
            let messageIndex = 0;

            // Add lines into messages (multiple if character limit of 2000 is reached)
            discordQueue.forEach((line) => {
                if ((messages[messageIndex] + line).length > 1800) {
                    messageIndex++;
                    messages[messageIndex] = "";
                }
                messages[messageIndex] += line + "\n";
            });

            // Send messages
            messages.forEach((message) => {
                webhookClient.send(message);
            });
            discordQueue = [];
        }
    }, time.seconds(20));
}

export function log(message: string, emoji: string): void {
    discordQueue.push(`${emoji} ${message} (${process.env.APPLICATION}#${process.env.DEBUG ? "dev" : "prod"}/${process.env.INSTANCE})`);
}
