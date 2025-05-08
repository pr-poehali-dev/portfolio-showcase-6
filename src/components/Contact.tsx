import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
            Связаться со мной
          </h2>
          <p className="text-foreground/70 text-lg">
            Заинтересованы в сотрудничестве? Отправьте сообщение или свяжитесь
            через социальные сети
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-0 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-primary p-8 text-center text-primary-foreground">
                <div className="inline-block bg-white/20 p-4 rounded-full mb-4">
                  <Icon name="Mail" className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Контактная информация
                </h3>
                <p className="opacity-90 mb-6">
                  Свяжитесь со мной для обсуждения проектов в области
                  книгоиздания и оцифровки
                </p>

                <div className="space-y-4 text-left">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-full">
                      <Icon name="Mail" className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="opacity-80 text-sm">Email</p>
                      <p className="font-medium">email@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-full">
                      <Icon name="Phone" className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="opacity-80 text-sm">Телефон</p>
                      <p className="font-medium">+7 (999) 123-45-67</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-full">
                      <Icon name="MapPin" className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="opacity-80 text-sm">Локация</p>
                      <p className="font-medium">Москва, Россия</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-4 mt-8">
                  <a
                    href="#"
                    className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                    aria-label="Github"
                  >
                    <Icon name="Github" size={20} />
                  </a>
                  <a
                    href="#"
                    className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Icon name="Linkedin" size={20} />
                  </a>
                  <a
                    href="#"
                    className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                    aria-label="Twitter"
                  >
                    <Icon name="Twitter" size={20} />
                  </a>
                  <a
                    href="#"
                    className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                    aria-label="Instagram"
                  >
                    <Icon name="Instagram" size={20} />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Отправить сообщение</h3>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Имя
                    </label>
                    <Input
                      id="name"
                      placeholder="Ваше имя"
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@example.com"
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium"
                  >
                    Тема
                  </label>
                  <Input
                    id="subject"
                    placeholder="Тема сообщения"
                    className="border-primary/20 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                  >
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Ваше сообщение..."
                    className="min-h-[120px] border-primary/20 focus:border-primary"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Отправить сообщение{" "}
                  <Icon name="Send" className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
