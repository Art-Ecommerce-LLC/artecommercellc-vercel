"use server";

import nodemailer from 'nodemailer';

// Core function to send an email
export async function sendMail({ to, subject, text, html, outlook }: { to: string, subject: string, text: string, html: string, outlook?: boolean }) {
    const isProduction = process.env.NODE_ENV === 'production';
    try {
        let transporter;
        if (!outlook) {
            transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASSWORD,
                },
            });
            await transporter.sendMail({
                from: process.env.SMTP_USER,
                to,
                subject,
                text,
                html,
            });
        } else if (outlook) {
            transporter = nodemailer.createTransport({
                host:'smtp.office365.com',
                port: 587,
                secure: isProduction ,
                auth: {
                    user: process.env.OUTLOOK_SMTP_USER,
                    pass: process.env.OUTLOOK_APP_PASSWORD,
                },
            });
            await transporter.sendMail({
                from: process.env.OUTLOOK_SMTP_USER,
                to,
                subject,
                text,
                html,
            });
        }
        


    } catch (error) {
        return { error: "Something went wrong" };
    }
}

// Generalized function to send various types of emails
export async function sendEmail({
    to,
    type,
    session = '',
    otp = '',
    outlook,
    timeslot,

}: {
    to: string;
    type: 'verifyEmail' | 'otp' | 'resetPassword' | 'bookingConfirmation';
    session?: string;
    otp?: string;
    outlook?: boolean;
    timeslot?: string;

}) {
    let subject = '';
    let text = '';
    let html = '';

    switch (type) {
        case 'verifyEmail':
            const verificationUrl = `${process.env.NEXTAUTH_URL}/api/auth/verifyEmail?verifyEmail=${session}`;
            subject = 'Email Verification';
            text = `Please verify your email by clicking this link: ${verificationUrl}`;
            html = `<p>Click <a href="${verificationUrl}">here</a> to verify your email.</p>`;
            break;

        case 'otp':
            subject = 'OTP Verification';
            text = `Please verify your OTP`;
            html = `<p>Your OTP is: ${otp}</p>`;
            break;

        case 'resetPassword':
            const resetPasswordUrl = `${process.env.NEXTAUTH_URL}/api/auth/verifyPasswordReset?verifyPassword=${session}`;
            subject = 'Reset Password';
            text = `Click this link to reset your password: ${resetPasswordUrl}`;
            html = `<p>Click <a href="${resetPasswordUrl}">here</a> to reset your password.</p>`;
            break;
        case 'bookingConfirmation':
            subject = 'Booking Confirmation';
            text = 'Your booking has been confirmed';
            html = `
            <p>Your booking has been confirmed for ${timeslot}. A seperate email with the meeting link has been sent to you. I look forward to speaking with you!</p>
            <p>Best, <br> Ben Myers <br> CEO at Art Ecommerce, LLC</p>
            `;
            break;

        default:
            throw new Error('Invalid email type');
    }

    if (outlook == true) {
        return sendMail({ to, subject, text, html, outlook });
    }
    return sendMail({ to, subject, text, html });
}
