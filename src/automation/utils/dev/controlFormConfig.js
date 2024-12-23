const urlSubstring = "api.leboncoin.fr/api/adsubmit/dynamic-deposit/config"

const newResponse = {
	"navigation": {
		"ordered_steps": [
			{
				"identifier": "STEP_IDENTIFIER_ADPARAMS",
				"title": "Dites-nous en plus",
				"helper_text": {
					"body": [
						"Mettez en valeur votre annonce !",
						"Plus il y a de détails, plus vos futurs contacts vous trouveront rapidement."
					]
				},
				"ordered_items": [
					"animals_services_type_id"
				]
			},
			{
				"identifier": "STEP_IDENTIFIER_DESCRIPTION",
				"title": "Décrivez votre bien !",
				"helper_text": {
					"body": [
						"Mettez en valeur votre annonce ! Plus il y a de détails, plus elle sera de qualité."
					]
				},
				"ordered_items": [
					"subject_id",
					"body_id",
					"custom_ref_id"
				]
			},
			{
				"identifier": "STEP_IDENTIFIER_PRICE",
				"title": "Quel est votre prix ?",
				"helper_text": {
					"body": [
						"Vous le savez, le prix est important. Soyez juste, mais ayez en tête une marge de négociation si besoin."
					]
				},
				"ordered_items": [
					"price_id"
				]
			},
			{
				"identifier": "STEP_IDENTIFIER_IMAGES",
				"title": "Ajoutez des photos",
				"helper_text": {
					"body": [
						"Mettez en valeur votre bien ! Plus il y a de détails, plus votre annonce sera de qualité. Détaillez ici ce qui a de l'importance et ajoutera de la valeur."
					]
				},
				"ordered_items": [
					"images_id"
				]
			},
			{
				"identifier": "STEP_IDENTIFIER_LOCATION",
				"title": "Où se situe votre bien ?",
				"helper_text": {
					"body": [
						"Pour des raisons de confidentialité, si vous renseignez votre adresse exacte, celle-ci n’apparaîtra jamais sur votre annonce."
					]
				},
				"ordered_items": [
					"location_id"
				]
			},
			{
				"identifier": "STEP_IDENTIFIER_CONTACT",
				"title": "Vos coordonnées",
				"helper_text": {
					"body": [
						"Pour plus de sécurité et faciliter vos échanges avec vos futurs contacts, merci d’entrer un numéro de téléphone valide."
					]
				},
				"ordered_items": [
					"email_id",
					"phone_id",
					"phone_hidden_id",
					"no_salesmen_id",
					"tos_id",
					"tracking_dd_id"
				]
			}
		]
	},
	"definitions": {
		"items": [
			{
				"identifier": "animals_services_type_id",
				"type": "ITEM_TYPE_QUESTION",
				"answer_modelization": {
					"representation": {
						"associated_key": "animals_services_type",
						"codec_type": "CODEC_TYPE_EXTENDED_ATTRIBUTES"
					},
					"multiple_answers": {
						"choices": [
							{
								"identifier": "horse_box_enclosure",
								"label": "Box de cheval et enclos"
							},
							{
								"identifier": "half_board_horse",
								"label": "Cheval en demi-pension"
							},
							{
								"identifier": "riding_lessons",
								"label": "Cours d'équitation"
							},
							{
								"identifier": "others",
								"label": "Autres"
							}
						]
					}
				},
				"decoration": {
					"visual_representation": "DECORATION_VISUAL_REPRESENTATION_MULTI_SELECT",
					"label": "Type"
				}
			},
			{
				"identifier": "subject_id",
				"type": "ITEM_TYPE_QUESTION",
				"answer_modelization": {
					"representation": {
						"associated_key": "subject",
						"codec_type": "CODEC_TYPE_ROOT"
					},
					"single_answer": {
						"type": "QUESTION_ANSWER_TYPE_STRING"
					}
				},
				"static_rules": {
					"mandatory": {
						"error_message": "Veuillez donner un titre à votre annonce"
					},
					"regex": [
						{
							"value": "[^\\s].*[^\\s]",
							"error_message": "Votre titre doit contenir au moins 2 caractères"
						}
					]
				},
				"decoration": {
					"visual_representation": "DECORATION_VISUAL_REPRESENTATION_TEXTFIELD_TEXT",
					"label": "Titre de l'annonce",
					"helper_text": {
						"body": [
							"Un bon titre c’est quelques mots pour décrire précisément votre service.",
							"Votre annonce sera refusée si le titre ne décrit pas précisément le service que vous proposez."
						]
					},
					"max_length": 200,
					"is_max_length_visible": true
				}
			},
			{
				"identifier": "body_id",
				"type": "ITEM_TYPE_QUESTION",
				"answer_modelization": {
					"representation": {
						"associated_key": "body",
						"codec_type": "CODEC_TYPE_ROOT"
					},
					"single_answer": {
						"type": "QUESTION_ANSWER_TYPE_STRING"
					}
				},
				"static_rules": {
					"mandatory": {
						"error_message": "Veuillez rédiger un texte d'annonce"
					},
					"regex": [
						{
							"value": "[^\\s](.|\\n){8,}[^\\s]",
							"error_message": "Votre annonce doit contenir au moins 10 caractères"
						}
					]
				},
				"decoration": {
					"visual_representation": "DECORATION_VISUAL_REPRESENTATION_TEXTAREA",
					"label": "Description de l'annonce",
					"helper_text": {
						"body": [
							"Pour toute prestation de service à la personne (cf. liste des règles de diffusion) : déposer en tant que professionnel ou indiquer obligatoirement le moyen de paiement Chèque Emploi Service Universel ou PAJEMPLOI.",
							"Pour toute prestation de spectacle vivant : préciser que vous êtes adhérent au GUSO.",
							"Pour toute activité où votre responsabilité est engagée : déposer en tant que professionnel.",
							"Indiquez dans le texte de l’annonce si vous proposez un droit de rétractation à l’acheteur. En l’absence de toute mention, l’acheteur n’en bénéficiera pas et ne pourra pas demander le remboursement ou l’échange du bien ou service proposé."
						]
					},
					"max_length": 4000,
					"is_max_length_visible": true
				}
			},
			{
				"identifier": "custom_ref_id",
				"type": "ITEM_TYPE_QUESTION",
				"answer_modelization": {
					"representation": {
						"associated_key": "custom_ref",
						"codec_type": "CODEC_TYPE_ATTRIBUTES"
					},
					"single_answer": {
						"type": "QUESTION_ANSWER_TYPE_STRING"
					}
				},
				"static_rules": {
					"regex": [
						{
							"value": "^[a-zA-Z0-9_\\/\\.:-]{1,100}$",
							"error_message": "Les caractères autorisés sont les lettres sans accent ni cédille, les chiffres, - _ . / Les espaces ne sont pas autorisés"
						}
					]
				},
				"decoration": {
					"visual_representation": "DECORATION_VISUAL_REPRESENTATION_TEXTFIELD_TEXT",
					"label": "Référence",
					"max_length": 100
				}
			},
			{
				"identifier": "price_id",
				"type": "ITEM_TYPE_QUESTION",
				"answer_modelization": {
					"representation": {
						"associated_key": "price",
						"codec_type": "CODEC_TYPE_ROOT"
					},
					"single_answer": {
						"type": "QUESTION_ANSWER_TYPE_PRICE"
					}
				},
				"decoration": {
					"visual_representation": "DECORATION_VISUAL_REPRESENTATION_PRICE",
					"label": "Votre prix de vente",
					"max_length": 8,
					"unit": "€"
				}
			},
			{
				"identifier": "images_id",
				"type": "ITEM_TYPE_QUESTION",
				"answer_modelization": {
					"representation": {
						"associated_key": "images",
						"codec_type": "CODEC_TYPE_ROOT"
					},
					"single_answer": {
						"type": "QUESTION_ANSWER_TYPE_IMAGES"
					}
				},
				"decoration": {
					"visual_representation": "DECORATION_VISUAL_REPRESENTATION_IMAGES"
				}
			},
			{
				"identifier": "location_id",
				"type": "ITEM_TYPE_QUESTION",
				"answer_modelization": {
					"representation": {
						"associated_key": "location",
						"codec_type": "CODEC_TYPE_ROOT"
					},
					"single_answer": {
						"type": "QUESTION_ANSWER_TYPE_LOCATION"
					}
				},
				"static_rules": {
					"mandatory": {
						"error_message": "Veuillez saisir une adresse"
					}
				},
				"decoration": {
					"visual_representation": "DECORATION_VISUAL_REPRESENTATION_LOCATION",
					"helper_text": {
						"body": [
							"Complétez votre adresse et les personnes utilisant la recherche autour de soi trouveront plus facilement votre annonce. Si vous ne souhaitez pas renseigner votre adresse exacte, indiquez votre rue sans donner le numéro. Cette information ne sera conservée que le temps de la publication de votre annonce."
						]
					}
				}
			},
			{
				"identifier": "email_id",
				"type": "ITEM_TYPE_QUESTION",
				"answer_modelization": {
					"representation": {
						"associated_key": "email",
						"codec_type": "CODEC_TYPE_ROOT"
					},
					"single_answer": {
						"type": "QUESTION_ANSWER_TYPE_STRING"
					}
				},
				"static_rules": {
					"mandatory": {
						"error_message": "Veuillez insérer une adresse email"
					},
					"regex": [
						{
							"value": "^\\S+@\\S+\\.\\S+$",
							"error_message": "Vérifiez l'adresse email, son format n'est pas valide"
						}
					]
				},
				"decoration": {
					"visual_representation": "DECORATION_VISUAL_REPRESENTATION_TEXTFIELD_EMAIL",
					"label": "Email"
				}
			},
			{
				"identifier": "phone_id",
				"type": "ITEM_TYPE_QUESTION",
				"answer_modelization": {
					"representation": {
						"associated_key": "phone",
						"codec_type": "CODEC_TYPE_ROOT"
					},
					"single_answer": {
						"type": "QUESTION_ANSWER_TYPE_STRING"
					}
				},
				"static_rules": {
					"mandatory": {
						"error_message": "Veuillez insérer un numéro de téléphone"
					},
					"regex": [
						{
							"value": "^(\\+\\d\\d\\d{3,15}|\\d{3,15})$",
							"error_message": "Le format du numéro de téléphone est invalide"
						}
					]
				},
				"decoration": {
					"visual_representation": "DECORATION_VISUAL_REPRESENTATION_TEXTFIELD_PHONE",
					"label": "Téléphone",
					"max_length": 15
				}
			},
			{
				"identifier": "phone_hidden_id",
				"type": "ITEM_TYPE_QUESTION",
				"answer_modelization": {
					"representation": {
						"associated_key": "phone_hidden",
						"codec_type": "CODEC_TYPE_ROOT"
					},
					"single_answer": {
						"type": "QUESTION_ANSWER_TYPE_BOOL",
						"default_answer": "false"
					}
				},
				"decoration": {
					"visual_representation": "DECORATION_VISUAL_REPRESENTATION_TOGGLE",
					"label": "Masquer le numéro"
				}
			},
			{
				"identifier": "no_salesmen_id",
				"type": "ITEM_TYPE_QUESTION",
				"answer_modelization": {
					"representation": {
						"associated_key": "no_salesmen",
						"codec_type": "CODEC_TYPE_ROOT"
					},
					"single_answer": {
						"type": "QUESTION_ANSWER_TYPE_BOOL",
						"default_answer": "true"
					}
				},
				"decoration": {
					"visual_representation": "DECORATION_VISUAL_REPRESENTATION_TOGGLE",
					"label": "Refuser tout démarchage commercial"
				}
			},
			{
				"identifier": "tos_id",
				"type": "ITEM_TYPE_STATIC_VIEW",
				"decoration": {
					"visual_representation": "DECORATION_VISUAL_REPRESENTATION_TOS"
				}
			},
			{
				"identifier": "tracking_dd_id",
				"type": "ITEM_TYPE_QUESTION",
				"answer_modelization": {
					"representation": {
						"associated_key": "tracking_dd",
						"codec_type": "CODEC_TYPE_ROOT"
					},
					"single_answer": {
						"type": "QUESTION_ANSWER_TYPE_STRING",
						"default_answer": "dd:lbc.adlife.abtest.genaidescription:B|lbc.adlife.abtest.photo.first:A"
					}
				},
				"decoration": {
					"visual_representation": "DECORATION_VISUAL_REPRESENTATION_HIDDEN"
				}
			}
		]
	}
}

// Example modifyFunction
// function modifyFunction(originalJson) { // Modify the original JSON as needed
//     // originalJson.someProperty = 'new value';
//     return newResponse;
// }

export async function modifyResponses(page) {
	// enable request interception
	await page.setRequestInterception(true);

	// capture background requests
	page.on('request', (request) => {
		
		if (request.url().includes(urlSubstring)) {
			console.log("🚀 ~ page.on ~ request:", request)
			request.respond({
				status: 200,
				contentType: 'application/json',
				body: JSON.stringify(newResponse)
			});
			console.log("🚀 ~ modified ~ request:", request)
		} else {
			request.continue();
		}
		
	});
}

