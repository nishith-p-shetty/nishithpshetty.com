"use server";
import nodemailer from "nodemailer";

export async function SendMail(data) {
  const {
    MY_ZOHO_SMTP_HOST,
    MY_ZOHO_SMTP_PORT,
    MY_ZOHO_SMTP_USER,
    MY_ZOHO_SMTP_PASSWORD,
    MY_ZOHO_LEAD_RECEIVER,
  } = process.env;

  const recipientName = data.recipientName;
  const recipientEmail = data.recipientEmail;
  const recipientMessage = data.recipientMessage;
  const lead =
    "Name: " +
    recipientName +
    "\nEmail: " +
    recipientEmail +
    "\nMessage: " +
    recipientMessage;

  const transporter = nodemailer.createTransport({
    host: MY_ZOHO_SMTP_HOST,
    port: MY_ZOHO_SMTP_PORT,
    secure: true,
    auth: {
      user: MY_ZOHO_SMTP_USER,
      pass: MY_ZOHO_SMTP_PASSWORD,
    },
  });

  const textContent = `Thank You for Contacting\n
    Dear ${recipientName},
    Thank you for reaching out. I have received your message and will get back to you as soon as possible.\n
    We appreciate your interest and patience. If your inquiry is urgent, please use the contact details provided on our website for immediate assistance.\n
    Best regards,\n
    Nishith P Shetty\n
    https://www.nishithpshetty.com/`;
  const HTMLContent = `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Thank You for Reaching Out.</title>
		<style>
			body {
				font-family: "Arial", sans-serif;
				background-color: #f9f9f9;
				margin: 0;
				padding: 0;
			}
			.container {
				max-width: 650px;
				margin: 50px auto;
				background-color: #ffffff;
				border-radius: 10px;
				box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
				overflow: hidden;
			}
			.header {
				background-color: #007bff;
				color: white;
				text-align: center;
				padding: 20px 0;
			}
			.header h1 {
				margin: 0;
				font-size: 24px;
			}
			.content {
				padding: 30px;
				color: #333;
			}
			.content p {
				line-height: 1.6;
				margin: 10px 0;
			}
			.footer {
				background-color: #f1f1f1;
				text-align: center;
				padding: 10px 0;
				font-size: 14px;
				color: #777;
			}
			.footer a {
				color: #007bff;
				text-decoration: none;
			}
			.footer a:hover {
				text-decoration: underline;
			}
		</style>
	</head>
	<body>
		<div class="container">
			<div class="header">
				<h1>Thank You for Contacting!</h1>
			</div>
			<div class="content">
				<p>Dear ${recipientName},</p>
				<p>
					Thank you for reaching out. I have received your message and
					will get back to you as soon as possible.
				</p>
				<p>
					We appreciate your interest and patience. If your inquiry is
					urgent, please use the contact details provided on our
					website for immediate assistance.
				</p>
				<p>Best regards,</p>
				<p>Nishith P Shetty</p>
				<p>
					<a href="https://www.nishithpshetty.com/"
						>www.nishithpshetty.com</a
					>
				</p>
			</div>
			<div class="footer">
				<div>
					<table
						cellpadding="0"
						cellspacing="0"
						width="100%"
						style="max-width: 650px">
						<tbody>
							<tr>
								<td style="padding: 12px 0">
									<table
										cellpadding="0"
										cellspacing="0"
										style="width: 100%">
										<tbody>
											<tr>
												<td
													class="DISPLAYPICTURE"
													style="width: 160px"
													width="160">
													<div
														style="
															margin: 0;
															line-height: 0;
															text-align: center;
														">
														<img
															width="110px"
															style="
																max-width: 110px;
																height: auto;
																border: 3px
																	solid
																	#5363f2;
																border-radius: 50%;
															"
															src="https://avatars.githubusercontent.com/u/69454628?v=4" />
													</div>
												</td>
												<td
													style="
														width: 180px;
														padding-right: 20px;
													"
													width="180">
													<table
														cellpadding="0"
														cellspacing="0"
														style="width: 100%">
														<tbody>
															<tr>
																<td>
																	<p
																		style="
																			font-family: system-ui,
																				-apple-system,
																				Segoe
																					UI,
																				Roboto,
																				Ubuntu,
																				Cantarell,
																				Noto
																					Sans,
																				sans-serif;
																			font-size: 20px;
																			color: #5363f2;
																			font-weight: 700;
																			margin: 0;
																		">
																		Nishith
																		P Shetty
																	</p>
																	<p
																		style="
																			font-family: system-ui,
																				-apple-system,
																				Segoe
																					UI,
																				Roboto,
																				Ubuntu,
																				Cantarell,
																				Noto
																					Sans,
																				sans-serif;
																			font-size: 14px;
																			color: grey;
																			margin: 5px
																				0
																				0;
																		"></p>
																</td>
															</tr>
															<tr>
																<td
																	style="
																		padding: 8px
																			0 0;
																	">
																	<p
																		style="
																			font-family: system-ui,
																				-apple-system,
																				Segoe
																					UI,
																				Roboto,
																				Ubuntu,
																				Cantarell,
																				Noto
																					Sans,
																				sans-serif;
																			font-size: 14px;
																			margin: 0;
																			padding-top: 6px;
																			height: 30px;
																		">
																		<a
																			class="FACEBOOKURL"
																			href="https://www.facebook.com/nishith.p.shetty/"
																			target="_blank"
																			style="
																				display: inline-block;
																				line-height: 0;
																				margin-right: 5px;
																			">
																			<img
																				alt="Facebook"
																				width="20"
																				style="
																					max-width: 20px;
																					height: auto;
																					border: 0;
																				"
																				src="https://static.zohocdn.com/toolkit/assets/f365fd888609adb4592a.png" />
																		</a>
																		<a
																			class="TWITTERURL"
																			href="https://x.com/NishithPShetty"
																			target="_blank"
																			style="
																				display: inline-block;
																				line-height: 0;
																				margin-right: 5px;
																			">
																			<img
																				alt="Twitter"
																				width="20"
																				style="
																					max-width: 20px;
																					height: auto;
																					border: 0;
																				"
																				src="https://static.zohocdn.com/toolkit/assets/2a322e4d20895f8456e3.png" />
																		</a>
																		<a
																			class="LINKEDINURL"
																			href="https://www.linkedin.com/in/nishith-p-shetty/"
																			target="_blank"
																			style="
																				display: inline-block;
																				line-height: 0;
																				margin-right: 5px;
																			">
																			<img
																				alt="LinkedIn"
																				width="20"
																				style="
																					max-width: 20px;
																					height: auto;
																					border: 0;
																				"
																				src="https://static.zohocdn.com/toolkit/assets/44994ddd001121ef78ab.png" />
																		</a>
																		<a
																			class="YOUTUBEURL"
																			href="https://www.youtube.com/@globallyextended"
																			target="_blank"
																			style="
																				display: inline-block;
																				line-height: 0;
																				margin-right: 5px;
																			">
																			<img
																				alt="YouTube"
																				width="20"
																				style="
																					max-width: 20px;
																					height: auto;
																					border: 0;
																				"
																				src="https://static.zohocdn.com/toolkit/assets/bfa7da0565ea269e27e3.png" />
																		</a>
																		<a
																			class="INSTAGRAMURL"
																			href="https://www.instagram.com/nishith.p.shetty/"
																			target="_blank"
																			style="
																				display: inline-block;
																				line-height: 0;
																				margin-right: 5px;
																			">
																			<img
																				alt="Instagram"
																				width="20"
																				style="
																					max-width: 20px;
																					height: auto;
																					border: 0;
																				"
																				src="https://static.zohocdn.com/toolkit/assets/3581a585b3c1ed74caa7.png" />
																		</a>
																	</p>
																</td>
															</tr>
														</tbody>
													</table>
												</td>
												<td
													style="
														border-left: 1px solid
															#a1a4aa;
														padding-left: 20px;
													">
													<table
														cellpadding="0"
														cellspacing="0"
														style="width: 100%">
														<tbody>
															<tr>
																<td
																	style="
																		line-height: 1.6;
																	">
																	<table
																		cellpadding="0"
																		cellspacing="0"
																		style="
																			font-family: system-ui,
																				-apple-system,
																				Segoe
																					UI,
																				Roboto,
																				Ubuntu,
																				Cantarell,
																				Noto
																					Sans,
																				sans-serif;
																			font-size: 14px;
																			width: 100%;
																		">
																		<tbody>
																			<tr
																				class="EMAIL">
																				<td
																					style="
																						padding: 4px
																							0
																							0;
																					">
																					<img
																						style="
																							width: 16px;
																							height: auto;
																							line-height: 0;
																						"
																						src="https://static.zohocdn.com/toolkit/assets/e9f50d5df538b77aaf67.png" />
																				</td>
																				<td>
																					<a
																						href="mailto:nishithpshetty@nishithpshetty.com"
																						style="
																							text-decoration: none;
																						"
																						>nishithpshetty@nishithpshetty.com</a
																					>
																				</td>
																			</tr>
																			<tr
																				class="WEBSITE">
																				<td
																					style="
																						padding: 4px
																							0
																							0;
																					">
																					<img
																						style="
																							width: 16px;
																							height: auto;
																							line-height: 0;
																						"
																						src="https://static.zohocdn.com/toolkit/assets/3c660a292e9d9e5ec69a.png" />
																				</td>
																				<td>
																					<a
																						href="https://www.nishithpshetty.com"
																						style="
																							text-decoration: none;
																						"
																						>www.nishithpshetty.com</a
																					>
																				</td>
																			</tr>
																			<tr
																				class="ADDRESS">
																				<td
																					style="
																						vertical-align: top;
																						padding: 4px
																							0
																							0;
																					">
																					<img
																						style="
																							width: 16px;
																							height: auto;
																							line-height: 0;
																						"
																						src="https://static.zohocdn.com/toolkit/assets/603ad3f106f2ae6eaf88.png" />
																				</td>
																				<td>
																					Bengaluru,
																					Karnataka,
																					India
																				</td>
																			</tr>
																		</tbody>
																	</table>
																</td>
															</tr>
														</tbody>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
							<tr class="DISCLAIMER">
								<td
									style="
										border-top: 1px solid #a1a4aa;
										padding-top: 8px;
									">
									<p
										style="
											font-family: system-ui,
												-apple-system, Segoe UI, Roboto,
												Ubuntu, Cantarell, Noto Sans,
												sans-serif;
											font-size: 12px;
											color: grey;
											margin: 0;
											line-height: 1.5;
										">
										The content of this email is
										confidential and intended for the
										recipient specified in message only. It
										is strictly forbidden to share any part
										of this message with any third party,
										without a written consent of the sender.
										If you received this message by mistake,
										please reply to this message and follow
										with its deletion, so that we can ensure
										such a mistake does not occur in the
										future.
									</p>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p>
					&copy; ${new Date().getFullYear()}
					<a href="https://www.nishithpshetty.com/"
						>www.nishithpshetty.com</a
					>. All rights reserved.
				</p>
			</div>
		</div>
	</body>
</html>`;

  try {
    await transporter.verify();
  } catch (error) {
    console.log(error);
    return "failed";
  }

  const replyMail = {
    from: MY_ZOHO_SMTP_USER,
    to: recipientEmail,
    subject: "Thank You for Reaching Out.",
    text: textContent,
    html: HTMLContent,
  };

  const leadMail = {
    from: MY_ZOHO_SMTP_USER,
    to: MY_ZOHO_LEAD_RECEIVER,
    subject: "New lead from portfolio.",
    text: lead,
  };

  try {
    await transporter.sendMail(replyMail);

    await transporter.sendMail(leadMail);

    // both mail sent
    return "success";
  } catch (error) {
    // error in any mail
    console.log(error);
    return "failed";
  }
}
