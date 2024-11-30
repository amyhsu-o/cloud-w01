import { fetch } from "undici";
import dotenv from "dotenv";

dotenv.config();

export const handler = async (event) => {
    // discord info
    const whurl = process.env.DISCORD_WEBHOOK;
    if (!whurl) {
        throw new Error("DISCORD_WEBHOOK is not set in environment variables");
    }

    let message;
    try {
        // alarm info
        const metrics = "CPU utilization";
        const { time, alarmData } = event;
        if (!alarmData?.state?.reason) {
            throw new Error("Invalid alarm data format");
        }
        const reason = alarmData.state.reason;

        // message
        message = `
### ==== AWS CloudWatch Alarm: ${metrics} ====

**EC2:**
    webServer in Seoul (ap-northeast-2)

**Reason:** 
    ${reason}

**Time:**   
    ${time}`;
    } catch (err) {
        console.error("Error retrieving alarm info:", err.message);
        throw err;
    }

    try {
        // send to Discord
        await sendWebhook(whurl, message);
        console.log(`Send ${message} to Discord.`);
    } catch (err) {
        console.error("Error sending message to Discord:", err.message);
        throw err;
    }
};

const sendWebhook = async (whurl, message) => {
    try {
        const response = await fetch(whurl, {
            method: "POST",
            body: JSON.stringify({ content: message }),
            headers: { "content-type": "application/json" },
        });

        if (!response.ok) {
            throw new Error(
                `Failed to send webhook: ${response.status} ${response.statusText}`
            );
        }
    } catch (err) {
        console.error("Error sending webhook:", err.message);
        throw err;
    }
};
