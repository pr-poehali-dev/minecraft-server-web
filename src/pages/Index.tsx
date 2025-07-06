import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  const gameModesData = [
    {
      title: "PvP Арена",
      description: "Сражайся с другими игроками в эпических битвах",
      players: "24/50",
      icon: "Swords",
      color: "bg-gradient-to-br from-red-500 to-red-700",
    },
    {
      title: "Школа",
      description: "Изучай новые навыки и получай знания",
      players: "18/30",
      icon: "GraduationCap",
      color: "bg-gradient-to-br from-blue-500 to-blue-700",
    },
    {
      title: "Мини-игры",
      description: "Увлекательные игры и развлечения",
      players: "42/60",
      icon: "Gamepad2",
      color: "bg-gradient-to-br from-purple-500 to-purple-700",
    },
    {
      title: "Выживание",
      description: "Классическое выживание с друзьями",
      players: "156/200",
      icon: "Trees",
      color: "bg-gradient-to-br from-green-500 to-green-700",
    },
    {
      title: "Гриферский",
      description: "Без правил и ограничений",
      players: "89/100",
      icon: "Zap",
      color: "bg-gradient-to-br from-orange-500 to-orange-700",
    },
  ];

  const donationPacks = [
    {
      title: "VIP",
      price: "199₽",
      features: ["Цветной ник", "Приоритет входа", "Специальные команды"],
      popular: false,
    },
    {
      title: "PREMIUM",
      price: "399₽",
      features: [
        "Всё из VIP",
        "Уникальные предметы",
        "Личный варп",
        "Больше слотов",
      ],
      popular: true,
    },
    {
      title: "ELITE",
      price: "799₽",
      features: [
        "Всё из PREMIUM",
        "Собственный дом",
        "Креативный режим",
        "Админские привилегии",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('/img/a80b2a11-77e4-42bd-a397-1c37514764c1.jpg')",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-slate-950/70"></div>
        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#00D4AA] to-[#2D1B69] bg-clip-text text-transparent">
            MINECRAFT SERVER
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Лучший сервер с уникальными режимами игры
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-[#00D4AA] hover:bg-[#00D4AA]/90 text-black font-semibold px-8 py-3"
            >
              <Icon name="Play" className="mr-2" />
              Подключиться
            </Button>
            <div className="flex items-center gap-2 text-[#00D4AA]">
              <Icon name="Users" size={20} />
              <span className="text-lg font-semibold">324 игрока онлайн</span>
            </div>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-lg p-4 inline-block">
            <p className="text-sm text-gray-400">IP сервера:</p>
            <p className="text-lg font-mono text-[#00D4AA]">play.myserver.ru</p>
          </div>
        </div>
      </div>

      {/* Game Modes Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Режимы игры</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gameModesData.map((mode, index) => (
              <Card
                key={index}
                className="bg-slate-900/50 border-slate-800 hover:border-[#00D4AA]/50 transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg ${mode.color} flex items-center justify-center mb-4`}
                  >
                    <Icon name={mode.icon} className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-white">{mode.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {mode.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">
                      Игроков онлайн:
                    </span>
                    <Badge
                      variant="outline"
                      className="text-[#00D4AA] border-[#00D4AA]"
                    >
                      {mode.players}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Привилегии и донат
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {donationPacks.map((pack, index) => (
              <Card
                key={index}
                className={`relative bg-slate-900/50 border-slate-800 hover:border-[#00D4AA]/50 transition-all duration-300 ${pack.popular ? "ring-2 ring-[#00D4AA] transform scale-105" : ""}`}
              >
                {pack.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#00D4AA] text-black">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white">
                    {pack.title}
                  </CardTitle>
                  <CardDescription className="text-3xl font-bold text-[#00D4AA]">
                    {pack.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {pack.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <Icon
                          name="Check"
                          size={16}
                          className="text-[#00D4AA]"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${pack.popular ? "bg-[#00D4AA] hover:bg-[#00D4AA]/90 text-black" : "bg-slate-800 hover:bg-slate-700 text-white"}`}
                  >
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Статистика сервера
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-slate-900/50 border-slate-800 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-[#00D4AA] mb-2">
                  324
                </div>
                <p className="text-gray-400">Игроков онлайн</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-900/50 border-slate-800 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-[#00D4AA] mb-2">
                  15,420
                </div>
                <p className="text-gray-400">Всего игроков</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-900/50 border-slate-800 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-[#00D4AA] mb-2">
                  99.9%
                </div>
                <p className="text-gray-400">Аптайм</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-900/50 border-slate-800 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-[#00D4AA] mb-2">5</div>
                <p className="text-gray-400">Лет работы</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="rules" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-slate-800">
              <TabsTrigger value="rules">Правила</TabsTrigger>
              <TabsTrigger value="support">Поддержка</TabsTrigger>
              <TabsTrigger value="about">О сервере</TabsTrigger>
              <TabsTrigger value="forum">Форум</TabsTrigger>
            </TabsList>
            <TabsContent value="rules" className="mt-6">
              <Card className="bg-slate-900/50 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Icon name="Shield" className="text-[#00D4AA]" />
                    Правила сервера
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Соблюдение правил обязательно для всех игроков
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold text-[#00D4AA] mb-4 flex items-center gap-2">
                        <Icon name="Ban" size={18} />
                        Запрещено
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <Icon
                            name="X"
                            size={16}
                            className="text-red-500 mt-1 flex-shrink-0"
                          />
                          <span>
                            <strong>Читерский софт</strong> - использование
                            любых модов, дающих преимущество (X-Ray, Fly, Speed
                            и т.д.)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Icon
                            name="X"
                            size={16}
                            className="text-red-500 mt-1 flex-shrink-0"
                          />
                          <span>
                            <strong>Токсичность</strong> - оскорбления, мат,
                            унижения других игроков
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Icon
                            name="X"
                            size={16}
                            className="text-red-500 mt-1 flex-shrink-0"
                          />
                          <span>
                            <strong>Спам в чате</strong> - повторение сообщений,
                            капс, бессмысленные символы
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Icon
                            name="X"
                            size={16}
                            className="text-red-500 mt-1 flex-shrink-0"
                          />
                          <span>
                            <strong>Гриферство</strong> - разрушение чужих
                            построек без разрешения (кроме гриферского режима)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Icon
                            name="X"
                            size={16}
                            className="text-red-500 mt-1 flex-shrink-0"
                          />
                          <span>
                            <strong>Дюпы и баги</strong> - использование багов
                            для получения преимущества
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[#00D4AA] mb-4 flex items-center gap-2">
                        <Icon name="CheckCircle" size={18} />
                        Рекомендации
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <Icon
                            name="Check"
                            size={16}
                            className="text-green-500 mt-1 flex-shrink-0"
                          />
                          <span>
                            <strong>Уважение</strong> - относитесь к другим
                            игрокам дружелюбно
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Icon
                            name="Check"
                            size={16}
                            className="text-green-500 mt-1 flex-shrink-0"
                          />
                          <span>
                            <strong>Помощь новичкам</strong> - помогайте новым
                            игрокам разобраться
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Icon
                            name="Check"
                            size={16}
                            className="text-green-500 mt-1 flex-shrink-0"
                          />
                          <span>
                            <strong>Командная игра</strong> - играйте в команде,
                            стройте вместе
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[#00D4AA] mb-4 flex items-center gap-2">
                        <Icon name="AlertTriangle" size={18} />
                        Наказания
                      </h3>
                      <div className="bg-slate-800/50 rounded-lg p-4 space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-yellow-400">
                            Предупреждение
                          </span>
                          <span className="text-sm text-gray-400">
                            Мелкие нарушения
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-orange-400">
                            Мут (1-24 часа)
                          </span>
                          <span className="text-sm text-gray-400">
                            Нарушения в чате
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-red-400">
                            Кик/Временный бан
                          </span>
                          <span className="text-sm text-gray-400">
                            Серьезные нарушения
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-red-600">Перманентный бан</span>
                          <span className="text-sm text-gray-400">
                            Читы, дюпы, серьезные нарушения
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#00D4AA]/10 border border-[#00D4AA]/20 rounded-lg p-4">
                      <p className="text-sm text-center">
                        <Icon name="Info" size={16} className="inline mr-2" />
                        Незнание правил не освобождает от ответственности.
                        Администрация оставляет за собой право изменять правила.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="support" className="mt-6">
              <Card className="bg-slate-900/50 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-white">Поддержка</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>Нужна помощь? Свяжитесь с нами:</p>
                  <div className="mt-4 space-y-2">
                    <p>• Discord: discord.gg/myserver</p>
                    <p>• Telegram: @myserver_support</p>
                    <p>• Email: support@myserver.ru</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="about" className="mt-6">
              <Card className="bg-slate-900/50 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-white">О сервере</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>
                    Наш сервер работает с 2019 года и предлагает уникальный
                    игровой опыт с множеством режимов игры, качественной
                    поддержкой и справедливой администрацией.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="forum" className="mt-6">
              <Card className="bg-slate-900/50 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-white">Форум</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>
                    Обсуждайте игру, делитесь опытом и находите новых друзей на
                    нашем форуме!
                  </p>
                  <Button className="mt-4 bg-[#00D4AA] hover:bg-[#00D4AA]/90 text-black">
                    Перейти на форум
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2024 Minecraft Server. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
